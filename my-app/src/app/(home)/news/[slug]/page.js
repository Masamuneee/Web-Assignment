'use client'

import React from "react";
import { news } from "@/database/news";
import { Chip, Avatar, Textarea, Button } from "@nextui-org/react";
import slugify from 'slugify';

export default function NewsDetailPage({ params }) {
  const Slug = params.slug;
  const newsItem = news.find((news) => slugify(news.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase() === Slug);

  const [value, setValue] = React.useState("");

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-8">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="font-bold text-xl md:text-3xl">{newsItem.title}</h1>
            <p className="text-sm md:text-base mt-2">{newsItem.description}</p>
          </div>
          <div className="w-1/2 flex flex-col justify-end items-end">
            <Chip color="default" >{newsItem.category}</Chip>
            <p className="text-sm md:text-base mt-2">{newsItem.date}</p>
          </div>
        </div>
        <img className="w-full aspect-[16/9] object-cover rounded-2xl" src={newsItem.image} alt={newsItem.title} />
        <div className="comment-section max-w-[50%] mx-auto flex flex-col gap-4">
          <h1 className="font-bold text-xl">Comments</h1>
          <form>
            <Textarea
              label="Comment"
              placeholder="Enter your comment"
              value={value}
              onValueChange={setValue}
            />
            <div className="mt-2 flex flex-row gap-2 justify-end">
              <Button
                type="submit"
                color="default"
                radius="full"
                variant="light"
              >
                Cancel
              </Button>
              <Button
                isDisabled={value === "" ? true : false}
                type="submit"
                radius="full"
                color={value === "" ? "default" : "primary"}
              >
                Comment
              </Button>
            </div>
          </form>

          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-4">
              <div>
                <Avatar size="lg" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-base">John Doe</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row items-center">
                    <Button size="sm" isIconOnly radius="full" variant="light" color="primary">
                      <i className="pi pi-thumbs-up text-base"></i>
                    </Button>
                    <p className="text-xs">1111</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <Button size="sm" isIconOnly radius="full" variant="light" color="danger">
                      <i className="pi pi-thumbs-down text-base"></i>
                    </Button>
                    <p className="text-xs">1111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}