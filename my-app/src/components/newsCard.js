'use client'

import { Chip } from "@nextui-org/react";

function NewsCard({ category, title, description, date, image }) {
  return (
    <div className="bg-gray-100 rounded-2xl flex flex-col h-full overflow-hidden news-wrapper">
      <div className="news-image-container h-[250px] overflow-hidden">
        <div
          className="news-image h-full transition-[0.1s] duration-[ease]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      </div>
      <div className="p-8 flex flex-col grow shrink-0 basis-auto justify-between">
        <div className="flex flex-col gap-3">
          <Chip size="sm">{category}</Chip>
          <h1 className="text-xl font-bold">
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
        <p className="text-sm mt-3">{date}</p>
      </div>
    </div>
  )
}

function NewsCardHero({ category, title, description, date, image }) {
  return (
    <div className="bg-gray-100 rounded-2xl news-wrapper h-full overflow-hidden grid grid-cols-[3fr_2fr]">
      <div className="news-image-container overflow-hidden">
        <div
          className="news-image h-full w-full transition-[0.1s] duration-[ease] "
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Chip size="sm">{category}</Chip>
          <h1 className="text-2xl font-bold">
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
        <p className="text-sm mt-3">{date}</p>
      </div>
    </div>
  )
};

export {
  NewsCard,
  NewsCardHero
}