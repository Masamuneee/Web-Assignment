'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";
import ProductCard from "@/components/productCard";

import { ALBUM_FAV } from "@/constants/albumList";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
        <img src="taylor_swift-ttpd_banner.jpg" alt="hero" className="rounded-xl" />
        <div className="grid grid-cols-[2.5fr_1fr] gap-4">
          <img src="cch-ctdmmt_banner.jpg" alt="hero" className="rounded-xl" />
          <img src="taylor_swift-1989TV_banner_vertical.jpg" alt="hero" className="rounded-xl" />
        </div>
      </div>
      <div className="bg-white py-12 mt-12">
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
        <div className="max-w-screen-xl mx-auto">
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
