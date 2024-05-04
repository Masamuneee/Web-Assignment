'use client'

import ProductCard from "@/components/productCard";

import { products } from "@/database/products";
import { createSlug } from "@/utils/createSlug";

import Link from "next/link";

export default function Home() {
  const newArrivals = products.filter((product) => product.tag === "New Arrival");
  const customerPicks = products.filter((product) => product.tag === "Customer Pick");
  const sales = products.filter((product) => product.tag === "Sale");

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 px-4">
        <Link href="/shop/taylor_swift-ttpd">
          <img src="taylor_swift-ttpd_banner.jpg" alt="hero" className="rounded-xl" />
        </Link>
        <div className="flex flex-col md:grid grid-cols-[2.5fr_1fr] gap-4">
          <img src="cch-ctdmmt_banner.jpg" alt="hero" className="rounded-xl" />
          <Link href="/shop/taylor_swift-1989tv">
            <img src="taylor_swift-1989TV_banner_vertical.jpg" alt="hero" className="rounded-xl" />
          </Link>
        </div>
      </div>
      <div className="bg-white py-12 mt-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="section-header">New arrivals</h1>
          <div className="product-card">
            {newArrivals.map((album) => (
              <ProductCard
                key={album.productID}
                title={album.name}
                artist={album.artist}
                cover={album.image}
                linkToProduct={`/shop/${createSlug(album.image)}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="section-header">Customer picks</h1>
          <div className="product-card">
            {customerPicks.map((album) => (
              <ProductCard
                key={album.productID}
                title={album.name}
                artist={album.artist}
                cover={album.image}
                linkToProduct={`/shop/${createSlug(album.image)}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="section-header">Sales</h1>
          <div className="product-card">
            {sales.map((album) => (
              <ProductCard
                key={album.productID}
                title={album.name}
                artist={album.artist}
                cover={album.image}
                linkToProduct={`/shop/${createSlug(album.image)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
