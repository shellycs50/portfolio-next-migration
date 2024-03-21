import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" loading="lazy"/>
      <script defer src="https://kit.fontawesome.com/e647eecc8d.js" crossorigin="anonymous"></script> 

      <body className={inter.className}>{children}</body>
    </html>
  );
}
