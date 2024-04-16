'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="w-full h-[calc(100vh-3rem)] bg-[url(/taylor_swift-midnights.jpg)] bg-center bg-cover">
        <div className="flex flex-col items-center absolute inset-x-0 bottom-10">
          <div className="mb-5">
            <h1 className="text-5xl text-white font-bold text-center mb-1">
              MIDNIGHTS
            </h1>
            <p className="text-white text-center text-[24px]">A brand new album by Taylor Swift.</p>
          </div>
          <div className="flex flex-row gap-3">
            <Button color="default" radius="full">Learn more</Button>
            <Button color="default" variant="ghost" radius="full" className="text-white hover:text-black">Order</Button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        Other albums
      </div>
    </div>
  );
}
