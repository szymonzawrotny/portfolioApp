import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolioApp",
  description: "My portfolio app, check out my others projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
