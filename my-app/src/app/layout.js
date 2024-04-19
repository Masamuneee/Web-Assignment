'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import 'primeicons/primeicons.css';

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <NextUIProvider>
          <NavBar />
          <main className="bg-gray-100">
            {children}
          </main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
