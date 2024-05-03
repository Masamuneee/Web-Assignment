import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/navigationRoutes";
import { Badge, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownItem, DropdownMenu } from "@nextui-org/react";
import DropDown from "@/components/dropdown";
import Link from "next/link";

export default function NavBar() {
  let isLoggedIn = true;
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
        <div className="flex flex-row gap-8 items-center">
          <Dropdown>
            <Badge content="99+" shape="circle" color="danger">
              <DropdownTrigger>
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                  size="lg"
                >
                  <i className="pi pi-shopping-cart text-2xl"></i>
                </Button>
              </DropdownTrigger>
            </Badge>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
              <DropdownSection title="Notifications">
                <DropdownItem
                  key="noti"
                  description="Content of notification 1"
                  startContent={<i className="pi pi-sparkles mr-1"></i>}
                >
                  Notification 1
                </DropdownItem>
                <DropdownItem
                  key="noti"
                  description="Content of notification 2"
                  startContent={<i className="pi pi-sparkles mr-1"></i>}
                >
                  Notification 2
                </DropdownItem>
                <DropdownItem
                  key="noti"
                  description="Content of notification 3"
                  startContent={<i className="pi pi-sparkles mr-1"></i>}
                >
                  Notification 3
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
          {
            isLoggedIn ? (
              <DropDown />
            ) : (
              <Button
                radius="full"
                variant="ghost"
                className="hover:!bg-[#1C76C3] hover:!text-white border-[#1C76C3] text-[#1C76C3]"
              >
                <Link href="/signin">
                  Sign in
                </Link>
              </Button>
            )
          }
        </div>
      </div>
    </div>
  );
}