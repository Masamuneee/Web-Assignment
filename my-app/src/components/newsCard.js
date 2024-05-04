'use client'

import { Chip } from "@nextui-org/react";

export default function NewsCard({ category, title, description, date, image }) {
  let className = "news-image h-full transition-[0.1s] duration-[ease] bg-[url(\'" + image + "\')] bg-cover bg-center";

  return (
    <div className="bg-gray-100 rounded-2xl grid grid-cols-[3fr_2fr] md:flex flex-col h-full overflow-hidden news-wrapper">
      <div className="news-image-container h-full md:h-[250px] overflow-hidden">
        <div className={className}>
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