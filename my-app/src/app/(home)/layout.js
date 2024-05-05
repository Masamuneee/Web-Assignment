'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Victor_Mono } from "next/font/google";

import "./globals.css";
import 'primeicons/primeicons.css';

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SideNavBar from "@/components/sideNavbar";

const plusJakartaSans = Victor_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <NextUIProvider>
          <NavBar />
          {/* <SideNavBar /> */}
          <main className="mt-[80px]">
            {children}
          </main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
