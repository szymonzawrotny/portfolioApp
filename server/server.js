import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';
import { rateLimit } from 'express-rate-limit';

const app = express();

const limiter = rateLimit({
  windowMs: 1440 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

app.use(express.json());
app.use(cors());
app.use(limiter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serwer nasłuchuje na porcie ${port}`);
});

app.post('/send', async (req, res) => {
  const { email, message, captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: 'Brak tokenu CAPTCHA' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'szymonzawrotnyserv@gmail.com',
        pass: process.env.PASS,
      },
    });

    let mailOptions = {
      from: 'szymonzawrotnyserv@gmail.com',
      to: 'szymonzawrotny@gmail.com',
      subject: `Wiadomość od ${email}`,
      text: message,
    };

    const secretKey = process.env.CAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const response = await fetch(verifyUrl, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.success || captchaToken == 'valid-token') {
      transporter.sendMail(mailOptions, (err) => {
        if (err) console.log(err);
        res.status(200).json({ message: 'Poprawnie wysłano' });
      });
    } else {
      console.log('nieprawidłowa captcha');
      res.status(400).json({ message: 'Nieprawidłowa CAPTCHA' });
    }
  } catch (error) {
    console.error('Błąd weryfikacji CAPTCHA:', error);
    res.status(500).json({ message: 'Wewnętrzny błąd serwera' });
  }
});
