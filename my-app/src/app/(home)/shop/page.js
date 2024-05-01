'use client'

import ShopCard from "@/components/shopCard";
import { ALBUM_FAV } from "@/constants/albumList";

export default function Shop() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl text-center font-bold">SHOP</h1>
        <div className="grid grid-cols-5 gap-x-4 gap-y-8 mt-14">
          {ALBUM_FAV.newArrivals.map((album) => (
            <ShopCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
            />
          ))}
          {ALBUM_FAV.customerPicks.map((album) => (
            <ShopCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
            />
          ))}
          {ALBUM_FAV.sales.map((album) => (
            <ShopCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}