import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "Orada.com",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
       <main className="flex-grow" > {children}</main>
        <Footer/>
       </div>
      </body>
    </html>
  );
}
