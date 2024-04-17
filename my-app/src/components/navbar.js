'use client'

import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/navigationRoutes";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <div className="w-full h-[3rem] bg-green-400">
      <div className="max-w-screen-xl h-full mx-auto flex flex-row justify-between items-center">
        <div>
          <Link href="/">
            <h1>Shopify!</h1>
          </Link>
        </div>
        <div className="h-full bg-inherit">
          {ROUTES.navigationRoutes.map((route) => (
            <Button
              key={route}
              radius="none"
              className="bg-inherit h-full hover:bg-green-500"
            >
              <Link href={`/${route}`}>
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            </Button>
          ))}
        </div>
        <div>
          <Button
            radius="full"
            color="primary"
            size="sm"
            className="bg-inherit"
          >
            <Link href="/signin">
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}