'use client'
import { Button } from "@nextui-org/react";

export default function Detail() {
  return (
    <div className="bg-white w-full mt-10">
      <div className="flex flex-row max-w-screen-xl mx-auto">
        <div className="w-1/2">
          <img src="taylor_swift-1989TV.jpg" alt="hero" className="w-3/4" />
        </div>
        <div className="w-1/2">
          <h1 className="section-header !text-left">1989 (Taylor's Version)</h1>
          <p>13 comments</p>
          <p>$49.99</p>
          <div className="w-full flex flex-row items-center">
            <div>
              Quantity
            </div>
            <Button color="primary" radius="full" className="w-full">Add to cart</Button>
          </div>
          <div>
            <h1 className="font-bold">Description</h1>
            <p>
              1989 (Taylor's Version) is the fourth re-recorded album by the American singer-songwriter Taylor Swift. It is a re-recording of Swift's fifth studio album, 1989 (2014), and was released on October 27, 2023, by Republic Records. The album is part of Swift's ongoing response to a 2019 dispute regarding the masters of her back catalog. It was announced at the final Los Angeles show of the Eras Tour on August 9, 2023.
            </p>
          </div>
          <div>
            <h1 className="font-bold">Tracklist</h1>
            <p>
              1989 (Taylor's Version) is the fourth re-recorded album by the American singer-songwriter Taylor Swift. It is a re-recording of Swift's fifth studio album, 1989 (2014), and was released on October 27, 2023, by Republic Records. The album is part of Swift's ongoing response to a 2019 dispute regarding the masters of her back catalog. It was announced at the final Los Angeles show of the Eras Tour on August 9, 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}