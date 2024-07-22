import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";

export const metadata: Metadata = {
  title: "Portofolio Hadyan",
  description: "A Frontend Developer Who Never Stops Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="text-secondary">
        <Header/>
        <div className="grid grid-cols-12 bg-primary">
          <div className="flex justify-center border">
            <p className="fixed bottom-24">logo github</p>
            <div className="fixed bottom-0 py-10 border border-solid border-gray"></div>
          </div>
          <div className="col-span-10">
            {children}
          </div>
          <div className="flex justify-center border">
            <p className="fixed bottom-48 transform rotate-90 text-gray">hadyanabdulaziz@gmail.com</p>
            <div className="fixed bottom-0 py-10 border border-solid border-gray"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
