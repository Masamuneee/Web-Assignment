'use client'

import { Input } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="w-full mt-20">
      <div className="w-[98%] mx-auto h-[2px] bg-gray-200"></div>
      <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-20">
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col items-start gap-5">
            <img
              src="/logo/logo-fullAsset 1.svg"
              alt="logo"
              className="h-[15rem] cursor-pointer"
            />
            <div className="w-[70%] flex flex-col gap-5">
              <Input
                isClearable
                type="email"
                label="Email"
                labelPlacement="inside"
              />
              <p className="text-xs w-3/4">
                Sign up for our newsletter to get the latest news, announcements, and special offers.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-end">
            <div className="ml-auto mr-0 flex flex-row gap-20">
              <div>
                <h1 className="text-2xl font-bold">Company</h1>
                <div className="flex flex-col gap-3 mt-5">
                  <a href="/about">About Us</a>
                  <a href="/shop">Inquiry</a>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Quick Links</h1>
                <div className="flex flex-col gap-3 mt-5">
                  <a href="/about">About Us</a>
                  <a href="/shop">Shop</a>
                  <a href="/news">News</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs flex flex-col gap-3">
            <p>
              © 2024 The Amazing Record Store. All rights reserved.
            </p>
            <div className="flex flex-row gap-5">
              <a className="hover:underline" href="/privacy">Privacy Policy</a>
              <a className="hover:underline" href="/terms">Terms of Service</a>
              <a className="hover:underline" href="/contact">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-2xl">
            <i className="pi pi-facebook"></i>
            <i className="pi pi-instagram"></i>
            <i className="pi pi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}