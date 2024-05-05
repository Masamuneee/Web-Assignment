'use client'

import { Input } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="w-full mt-20 px-4">
      <div className="w-[98%] mx-auto h-[2px] bg-gray-200"></div>
      <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-start gap-5">
            <img
              src="/logo/logo-fullAsset 1.svg"
              alt="logo"
              className="h-[10rem] md:h-[15rem] cursor-pointer"
            />
            <div className="w-full md:w-[70%] flex flex-col gap-5">
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
          <div className="w-full md:w-1/2 flex items-start md:items-end">
            <div className="md:ml-auto md:mr-0 flex flex-row-reverse md:flex-row gap-10 md:gap-20">
              <div>
                <h1 className="text-lg md:text-2xl font-bold">Company</h1>
                <div className="flex flex-col gap-3 mt-3 md:mt-5">
                  <a className="text-sm md:text-base" href="/about">About Us</a>
                  <a className="text-sm md:text-base" href="/shop">Inquiry</a>
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold">Quick Links</h1>
                <div className="flex flex-col gap-3 mt-3 md:mt-5">
                  <a className="text-sm md:text-base" href="/about">About Us</a>
                  <a className="text-sm md:text-base" href="/shop">Shop</a>
                  <a className="text-sm md:text-base" href="/news">News</a>
                  <a className="text-sm md:text-base" href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
          <div className="text-xs flex flex-col gap-3">
            <p>
              © 2024 The Amazing Record Store. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5">
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