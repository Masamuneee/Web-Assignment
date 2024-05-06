import { ROUTES } from "@/constants/navigationRoutes";
import { Badge, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownItem, DropdownMenu } from "@nextui-org/react";
import DropDown from "@/components/dropdown";
import Link from "next/link";
import { parseCookies } from "nookies";


export default function NavBar() {
  const openSideNavBar = async () => {
    document.getElementById("SideNavBar").style.width = "320px";
  }
  const closeSideNavBar = async () => {
    document.getElementById("SideNavBar").style.width = "0";
  }
  const cookies = parseCookies();
  const isLoggedIn = cookies.token ? true : false;
  const theRestRoutes = ROUTES.navRoutesWithIcons.slice(1);
  return (
    <>
      <div id="SideNavBar" className="block md:hidden h-full w-0 shadow-2xl rounded-r-2xl fixed z-[289] bg-blue-50 overflow-x-hidden transition-[0.5s] left-0 top-0">
        <div onClick={closeSideNavBar} className="mt-4 mb-2 ml-auto mr-0 w-12 h-12 flex items-center justify-center hover:bg-blue-200 rounded-full">
          <span className="pi pi-chevron-left text-xl"></span>
        </div>
        <div className="flex flex-col mx-2">
          {ROUTES.navRoutesWithIcons.map((route) => (
            <Link onClick={closeSideNavBar} key={route.id} href={`/${route.path}`}>
              <div className="side-nav-btn">
                <i className={`${route.icon} text-2xl mr-4`}></i>
                <p>{route.name.charAt(0).toUpperCase() + route.name.slice(1)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div id="NavBar" className="fixed top-0 z-[250] bg-white w-full h-[80px] py-4">
        <div className="max-w-screen-xl h-full mx-auto flex flex-row justify-between items-center px-4">
          <div className="flex flex-row gap-4 items-center">
            <Button isIconOnly variant="light" radius="full" className="block md:hidden" onPressStart={openSideNavBar}>
              <i className="pi pi-bars text-xl"></i>
            </Button>
            <Link href="/">
              <img
                src="/logo/logo-fullAsset 1.svg"
                alt="logo"
                className="h-[3.5rem] cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden bg-inherit md:flex flex-row gap-3">
            {theRestRoutes.map((route) => (
              <Link key={route.id} href={`/${route.path}`}>
                <Button
                  key={route.id}
                  radius="full"
                  className="bg-inherit text-[#353636] hover:text-white hover:bg-[#353636] font-bold"
                >
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Dropdown>
              <Badge content="99+" size="sm" shape="circle" color="danger">
                <DropdownTrigger>
                  <Button
                    radius="full"
                    isIconOnly
                    aria-label="more than 99 notifications"
                    variant="light"
                  >
                    <i className="pi pi-shopping-cart text-base md:text-xl"></i>
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
    </>
  );
}