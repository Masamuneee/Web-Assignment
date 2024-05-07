'use client'

import ShopCard from "@/components/shopCard";
import { createSlug } from "@/utils/createSlug";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Shop() {

  const [products, setProducts] = useState([])

  async function getProducts() {
    const response = await axios.get('http://localhost/test/admin/products.php')
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])


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