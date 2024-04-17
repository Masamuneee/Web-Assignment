'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";
import ProductCard from "@/components/productCard";

import { ALBUM_FAV } from "@/constants/albumList";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-[calc(100vh-3rem)] bg-[url(/taylor_swift-ttpd.jpg)] bg-center bg-cover">
        <div className="flex flex-col items-center absolute inset-x-0 bottom-10">
          <div className="mb-5">
            <h1 className="text-5xl text-white font-bold text-center mb-1">
              THE TORTURED POETS DEPARTMENT
            </h1>
            <p className="text-white text-center text-[24px]">A brand new album by Taylor Swift</p>
          </div>
          <div className="flex flex-row gap-3">
            <Button color="default" radius="full">Learn more</Button>
            <Button color="default" variant="ghost" radius="full" className="text-white hover:text-black">Order</Button>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="section max-w-screen-xl mx-auto">
          <h1 className="section-header">New arrivals</h1>
          <div className="grid grid-cols-5 gap-4">
            {ALBUM_FAV.newArrivals.map((album) => (
              <ProductCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                cover={album.cover}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="section max-w-screen-xl mx-auto">
          <h1 className="section-header">Customer picks</h1>
          <div className="grid grid-cols-5 gap-4">
            {ALBUM_FAV.customerPicks.map((album) => (
              <ProductCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                cover={album.cover}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="section max-w-screen-xl mx-auto">
          <h1 className="section-header">Sales</h1>
          <div className="grid grid-cols-4 gap-4">
            {ALBUM_FAV.sales.map((album) => (
              <ProductCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                cover={album.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
