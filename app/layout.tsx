import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



import { Navbar } from "./components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });
import { Header } from "./components/header";
import { CoverParticles } from "./components/cover-particles";

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
      <body className={`bg-black text-white ${urbanist.className}`}>
          <CoverParticles/>
          <Navbar/>
          <Header />
          {children}
        </body>
    </html>
  );
}
