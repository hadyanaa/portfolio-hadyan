"use client";
import "./globals.css";
import Header from "./header";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import Footer from "./footer";
import 'react-tooltip/dist/react-tooltip.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio | Hadyan Abdul Aziz</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="text-secondary">
        <Header/>
        <div className="grid grid-cols-12 bg-primary">
          <div className="flex justify-center items-center">
            <a className="fixed bottom-48" href="https://www.linkedin.com/in/hadyanaa/" target="_blank">
              <LuLinkedin className="text-[20px] text-gray hover:text-blue transition hover:cursor-pointer hover:-translate-y-1" />
            </a>
            <a className="fixed bottom-36" href="https://www.instagram.com/hady.an/" target="_blank">
              <LuInstagram className="text-[20px] text-gray hover:text-blue transition hover:cursor-pointer hover:-translate-y-1" />
            </a>
            <a className="fixed bottom-24" href="https://github.com/hadyanaa" target="_blank">
              <LuGithub className="text-[20px] text-gray hover:text-blue transition hover:cursor-pointer hover:-translate-y-1" />
            </a>
            <div className="fixed bottom-0 py-10 border border-solid border-gray"></div>
          </div>
          <div className="col-span-10">
            {children}
          </div>
          <div className="flex justify-center">
            <p className="fixed bottom-48 transform rotate-90 text-gray">hadyanabdulaziz@gmail.com</p>
            <div className="fixed bottom-0 py-10 border border-solid border-gray"></div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
