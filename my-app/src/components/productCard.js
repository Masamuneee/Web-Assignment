'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

export default function ProductCard({ title, artist, cover }) {
  return (
    <div class="container rounded-lg">
      <img src={cover} alt="Avatar" class="image rounded-lg" />
      <div class="middle flex flex-col items-center">
        <h1 className='text-2xl font-extrabold mb-1'>{title}</h1>
        <p>{artist}</p>
        <div className="flex flex-row gap-3 mt-3">
          <a href='/detail'>
            <Button size='sm' color="primary" radius="full">Learn more</Button>
          </a>
          <Button size='sm' color="primary" variant="ghost" radius="full">Order</Button>
        </div>
      </div>
    </div>
  );
}