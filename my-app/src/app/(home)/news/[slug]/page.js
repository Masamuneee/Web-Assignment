'use client'

import React from "react";
import { news } from "@/database/news";
import { Chip, Avatar, Textarea, Button } from "@nextui-org/react";
import slugify from 'slugify';
import axios from "axios";

export default function NewsDetailPage({ params }) {
  const Slug = params.slug;
  const newsItem = news.find((news) => slugify(news.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase() === Slug);

  const [value, setValue] = React.useState("");

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4 flex flex-col gap-8">
        <div className="w-[87.5%] sm:max-w-[75%] md:max-w-[50%] mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Chip color="default">{newsItem.category}</Chip>
            <p className="text-sm md:text-base">{newsItem.date}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl md:text-3xl">{newsItem.title}</h1>
            <p className="text-sm md:text-base">{newsItem.description}</p>
          </div>
        </div>

        <img className="w-full aspect-square md:aspect-[16/9] object-cover rounded-none md:rounded-2xl" src={newsItem.image} alt={newsItem.title} />

        <div className="w-[87.5%] sm:max-w-[75%] md:max-w-[50%] mx-auto flex flex-col gap-4">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi mauris, ornare in tristique ut, consequat a elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida fermentum quam, a tristique quam rutrum sit amet. Proin vel augue a augue finibus convallis vel vitae sapien. Pellentesque fringilla fringilla ultrices. Praesent maximus, orci eget facilisis faucibus, sapien justo sodales velit, nec rutrum ipsum nulla sit amet tortor. Cras congue erat eget felis sollicitudin, sed viverra sapien euismod. Proin in eros sed mauris venenatis aliquet sed vitae nunc. Maecenas quam quam, commodo in sodales ac, luctus sed est. Aenean sit amet sem at lacus dictum cursus nec sed odio. Fusce venenatis nisl at tellus pulvinar tristique. Proin elementum purus id odio venenatis, at venenatis arcu egestas.
          </p>
          <p className="text-sm md:text-base">
            Sed ac sollicitudin magna. Duis tortor neque, blandit id orci in, lobortis dictum sapien. Suspendisse eget tellus libero. Phasellus facilisis eros id tortor faucibus, a elementum urna tempor. In semper ipsum sed mi iaculis pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse porta iaculis sapien, a lobortis tellus. Integer mattis quis neque eu gravida.
          </p>
          <p className="text-sm md:text-base">
            Ut in semper felis, a sodales nibh. Phasellus luctus eu tellus id molestie. Aliquam rhoncus eu est et eleifend. Duis tincidunt nisi a tempus consectetur. Aliquam erat volutpat. Mauris vel dignissim turpis. Fusce maximus enim consequat orci sodales vehicula. Ut non eleifend odio. Phasellus finibus lorem ac tincidunt laoreet. Sed non eleifend nunc. Pellentesque tempor semper sem, eleifend efficitur mauris laoreet eu. Etiam porttitor eu neque quis blandit. Vivamus condimentum eget purus volutpat placerat. Morbi felis massa, volutpat ut faucibus sed, varius id felis. Donec pretium quis dui ac mattis.
          </p>
          <p className="text-sm md:text-base">
            Praesent a luctus nulla, id varius tortor. Praesent non leo eu turpis imperdiet molestie lobortis venenatis eros. Vestibulum maximus dolor enim, non venenatis ligula egestas condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et leo sed metus iaculis scelerisque. Phasellus sit amet mi vel ligula porta pulvinar. Nunc imperdiet metus neque, vitae accumsan elit aliquam et. Morbi fermentum nunc id dui ullamcorper consectetur.
          </p>
          <p className="text-sm md:text-base">
            Sed nec leo eget tellus consectetur iaculis nec non orci. In hac habitasse platea dictumst. Proin convallis diam a enim eleifend feugiat. Duis nisl mauris, rhoncus nec augue ac, ultricies gravida risus. Ut fringilla quam in velit molestie finibus. Pellentesque pharetra dapibus hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ante euismod, mattis enim ac, porta risus. Maecenas pharetra rhoncus porttitor. Sed euismod sodales urna id accumsan. Mauris molestie iaculis blandit. In hac habitasse platea dictumst. Fusce ultrices sem quis sapien elementum interdum.
          </p>
          <p className="text-sm md:text-base">
            Maecenas in condimentum ante. Donec feugiat tincidunt erat, sed sagittis leo dignissim ac. Suspendisse fermentum nec eros in semper. Curabitur tristique porta magna et imperdiet. Fusce in massa finibus, finibus mi in, fermentum ligula. Maecenas quis nulla porta, auctor tellus at, ultricies erat. Etiam vulputate vestibulum nunc, mattis facilisis est laoreet eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent mollis ligula eget erat viverra porta. Suspendisse varius enim nec nulla rutrum mattis. Aliquam ultrices elit vel tincidunt tincidunt. In vitae luctus libero. Maecenas in ligula eget erat vehicula aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="comment-section w-[87.5%] sm:max-w-[75%] md:max-w-[50%] mx-auto flex flex-col gap-4">
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