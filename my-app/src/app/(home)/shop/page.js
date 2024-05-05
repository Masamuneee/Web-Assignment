'use client'

import ShopCard from "@/components/shopCard";
import { products } from "@/database/products";
import { createSlug } from "@/utils/createSlug";

export default function Shop() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 mt-14">
          {products.map((album) => (
            <ShopCard
              key={album.productID}
              title={album.name}
              artist={album.artist}
              cover={album.image}
              price={album.price}
              linkToProduct={`/shop/${createSlug(album.image)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}