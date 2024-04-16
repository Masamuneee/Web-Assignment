'use client'

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <NextUIProvider>
          <NavBar />
          <main className="">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
