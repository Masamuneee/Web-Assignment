'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

export default function ShopCard({ title, artist, cover, price, linkToProduct }) {
  return (
    <div class="container rounded-lg">
      <img src={cover} alt="Avatar" class="rounded-lg" />
      <div class="mt-3 flex flex-col items-center md:items-start">
        <h1 className='text-xl md:text-sm font-extrabold'>{title}</h1>
        <p className='text-sm'>{artist}</p>
        <p className='text-sm mt-1' >${price}</p>
        <div className="flex flex-row gap-2 mt-2">
          <a href={linkToProduct}>
            <Button size='sm' color="primary" radius="full" className='text-[11px]'>Learn more</Button>
          </a>
          <Button size='sm' variant='ghost' color="primary" radius="full" className='text-[11px]'>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}