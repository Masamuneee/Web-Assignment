'use client'

import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/navigationRoutes";
import { Button } from "@nextui-org/react";
import DropDown from "@/components/dropdown";
import Link from "next/link";

export default function NavBar() {
  const pathName = usePathname();
  let isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <div className="w-full h-full py-4">
        <div className="max-w-screen-xl h-full mx-auto flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <img
                src="/logo/logo-fullAsset 1.svg"
                alt="logo"
                className="h-[7rem] cursor-pointer"
              />
            </Link>
          </div>
          <div className="bg-inherit flex flex-row gap-3">
            {ROUTES.navigationRoutes.map((route) => (
              <Link key={route} href={`/${route}`}>
                <Button
                  key={route}
                  radius="full"
                  size="lg"
                  className="bg-inherit text-[#353636] hover:text-white hover:bg-[#353636] font-bold"
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </Button>
              </Link>
            ))}
          </div>
          <DropDown />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="w-full h-full py-4">
        <div className="max-w-screen-xl h-full mx-auto flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <img
                src="/logo/logo-fullAsset 1.svg"
                alt="logo"
                className="h-[7rem] cursor-pointer"
              />
            </Link>
          </div>
          <div className="bg-inherit flex flex-row gap-3">
            {ROUTES.navigationRoutes.map((route) => (
              <Link key={route} href={`/${route}`}>
                <Button
                  key={route}
                  radius="full"
                  size="lg"
                  className="bg-inherit text-[#353636] hover:text-white hover:bg-[#353636] font-bold"
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </Button>
              </Link>
            ))}
          </div>
          <Button
            radius="full"
            size="lg"
            variant="ghost"
            className="hover:!bg-[#1C76C3] hover:!text-white border-[#1C76C3] text-[#1C76C3]"
          >
            <Link href="/signin">
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}