import React from 'react';
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import StarsCanvas from "../components/StarBackground";
import Providers from '../components/Providers'
import { Toaster } from '../components/ui/sonner';
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Srisanth | Portfolio",
  description: "This is my portfolio website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/assets/icon.png" /> */}
      <body className={outfit.className}>
        <Providers>
          <Navbar />
          <StarsCanvas />
          {children}
          <Toaster richColors closeButton/>
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}
