'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

export default function ProductCard({ title, artist, cover }) {
  return (
    <div className="container rounded-lg">
      <img src={cover} alt="Avatar" class="image rounded-lg" />
      <div className="middle flex flex-col items-center">
        <h1 className='text-2xl font-extrabold mb-1'>{title}</h1>
        <p>{artist}</p>
        <div className="flex flex-row gap-3 mt-3">
          <a href='/detail'>
            <Button size='sm' variant='ghost' color="primary" radius="full">Learn more</Button>
          </a>
        </div>
      </div>
    </div>
  );
}