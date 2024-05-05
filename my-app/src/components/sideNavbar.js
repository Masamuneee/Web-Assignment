import { Button } from "@nextui-org/react";

export default function SideNavBar() {
  return (
    <div className="h-full w-[320px] fixed z-[1] bg-blue-50 overflow-x-hidden transition-[0.5s] left-0 top-0">
      <div className="mt-4 mb-2 ml-3 w-12 h-12 flex items-center justify-center hover:bg-blue-200 rounded-full">
        <span className="pi pi-chevron-left text-xl"></span>
      </div>
      <div className="flex flex-col mx-2">
        <div className="side-nav-btn">
          <i className="pi pi-home text-2xl mr-4"></i>
          <p>Home</p>
        </div>
        <div className="side-nav-btn">
          <i className="pi pi-users text-2xl mr-4"></i>
          <p>About</p>
        </div>
        <div className="side-nav-btn">
          <i className="pi pi-shop text-2xl mr-4"></i>
          <p>Shop</p>
        </div>
        <div className="side-nav-btn">
          <i className="pi pi-objects-column text-2xl mr-4"></i>
          <p>News</p>
        </div>
        <div className="side-nav-btn">
          <i className="pi pi-address-book text-2xl mr-4"></i>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}