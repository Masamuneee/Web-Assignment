'use client'

import { Chip } from "@nextui-org/react";

export default function NewsPage() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl text-center font-bold">LATEST UPDATES</h1>
        <div className="mt-14 grid grid-cols-3 gap-6 rounded-2xl">
          <div className="col-span-3 rounded-2xl overflow-hidden bg-gray-100 h-[400px]">
            <div className="news-wrapper h-full overflow-hidden grid grid-cols-[3fr_2fr]">
              <div className="news-image-container overflow-hidden">
                <div className="news-image h-full w-full transition-[0.1s] duration-[ease] bg-[url('https://www.billboard.com/wp-content/uploads/2024/04/Taylor-Swift-cr-Beth-Garrabrant-2024-The-Albatross-billboard-1548.jpg?w=942&h=623&crop=1')] bg-cover bg-center">
              </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <Chip size="sm">Music</Chip>
                  <h1 className="text-2xl font-bold">
                    Taylor Swift's 'THE TORTURED POETS DEPARTMENT': Records Broken
                  </h1>
                  <p>
                    The 31-track LP sold 1.4 million copies in its first day.
                  </p>
                </div>
                <p className="text-sm mt-3">April 24th, 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl flex flex-col h-full overflow-hidden news-wrapper">
            <div className="news-image-container h-[250px] overflow-hidden">
              <div className="news-image h-full transition-[0.1s] duration-[ease] bg-[url('https://www.billboard.com/wp-content/uploads/2024/04/Taylor-Swift-cr-Beth-Garrabrant-2024-The-Albatross-billboard-1548.jpg?w=942&h=623&crop=1')] bg-cover bg-center">
              </div>
            </div>
            <div className="p-8 flex flex-col grow shrink-0 basis-auto justify-between">
              <div className="flex flex-col gap-3">
                <Chip size="sm">Music</Chip>
                <h1 className="text-xl font-bold">
                  Taylor Swift's 'THE TORTURED POETS DEPARTMENT': Records Broken
                </h1>
                <p>
                  The 31-track LP sold 1.4 million copies in its first day.
                </p>
              </div>
              <p className="text-sm mt-3">APRIL 24TH, 2024</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl flex flex-col h-full overflow-hidden news-wrapper">
            <div className="news-image-container h-[250px] overflow-hidden">
              <div className="news-image h-full transition-[0.1s] duration-[ease] bg-[url('https://www.billboard.com/wp-content/uploads/2024/04/Taylor-Swift-cr-Beth-Garrabrant-2024-The-Black-Dog-billboard-1548.jpg?w=942&h=623&crop=1')] bg-cover bg-center">
              </div>
            </div>
            <div className="p-8 flex flex-col grow shrink-0 basis-auto justify-between">
              <div className="flex flex-col gap-3">
                <Chip size="sm">Music</Chip>
                <h1 className="text-xl font-bold">
                  Taylor Swift Welcomed Fans to 'THE TORTURED POETS DEPARTMENT' in Sweet Hand-Written Record Store Day Note
                </h1>
                <p>
                  "It's my goal to create a memento you'll want to keep forever," she wrote.
                </p>
              </div>
              <p className="text-sm mt-3">APRIL 24TH, 2024</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl flex flex-col h-full overflow-hidden news-wrapper">
            <div className="news-image-container h-[250px] overflow-hidden">
              <div className="news-image h-full transition-[0.1s] duration-[ease] bg-[url('https://www.billboard.com/wp-content/uploads/2024/04/Taylor-Swift-cr-Beth-Garrabrant-2024-The-Black-Dog-billboard-1548.jpg?w=942&h=623&crop=1')] bg-cover bg-center">
              </div>
            </div>
            <div className="p-8 flex flex-col grow shrink-0 basis-auto justify-between">
              <div className="flex flex-col gap-3">
                <Chip size="sm">Music</Chip>
                <h1 className="text-xl font-bold">
                  The Starting Line Reacts to Taylor Swift's 'The Black Dog' Lyric About the Band's Song Being 'Intertwined' in Her Relationship
                </h1>
                <p>
                  Swift's rumored ex Matty Healy covered The Starting Line's "The Best of Me" on tour with The 1975 last spring.
                </p>
              </div>
              <p className="text-sm mt-3">APRIL 24TH, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}