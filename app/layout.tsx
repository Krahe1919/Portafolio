import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
const urbanist = Urbanist({ subsets: ["latin"] });
import { Header } from "./components/header";
export const metadata: Metadata = {
  title: "My portafolio",
  description: "Portafolio de Harol Moreno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
          <Navbar/>
          <Header />
          {children}
        </body>
    </html>
  );
}
