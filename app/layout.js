import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import 'devicon/devicon.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robert Sheldrick - Software Developer Portfolio",
  description: "Full-Stack Developer based in Gloucestershire, UK with a passion for problem solving.",
  keywords: ["Robert Sheldrick", "Rob Sheldrick", "Software Developer", "Full-Stack Developer", "Gloucestershire", "UK", "portfolio", "Developer", "Javascript", "PHP", "React", "CSS"],
  author: "Robert Sheldrick",
  type: "website"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="o-Paq6pN2gQHLuHmtCHQPhALcO2PP5bYnRl2AnsUJOU" />
        <link rel="canonical" href="https://robertsheldrick.com" />
      </head>
      <Script src="/assets/fontawesome.js" strategy="afterInteractive" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

