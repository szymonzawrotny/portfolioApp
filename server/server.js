import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`serwer nasłuchuje na porcie ${port}`);
})

app.post("/send",(req,res)=>{
    const {email,message} = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "szymonzawrotnyserv@gmail.com",
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: "szymonzawrotnyserv@gmail.com",
        to: "szymonzawrotny@gmail.com",
        subject: `Wiadomość od ${email}`,
        text: message
    }

    transporter.sendMail(mailOptions,(err)=>{
        if(err) console.log(err);
        else console.log("Wysłano!");
    })
})