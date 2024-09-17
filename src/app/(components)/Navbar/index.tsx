"use client";

import { Bell, Sun, Zap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* Left */}
      <div className="flex justify-between items-center gap-5">
        <div>logo</div>
        <h1 className="hidden lg:flex font-extrabold text-2xl">BitCloud</h1>
        <hr className="hidden lg:flex w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
        <Link href="/exchange">
          <h1 className="text-lg text-gray-500">Exchange</h1>
        </Link>
        <Link href="/buy">
          <h1 className="text-lg text-gray-500">Buy Crypto</h1>
        </Link>
        <Link href="/market">
          <h1 className="text-lg text-gray-500">Market</h1>
        </Link>
        <Link href="/discover">
          <h1 className="text-lg text-gray-500">Discover</h1>
        </Link>
      </div>

      {/* Right */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <Link href="/discover">
            <Zap className="cursor-pointer text-gray-500" size={24} />
          </Link>

          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-[0.4rem] text-xs font-semibold leading-none text-green-100 bg-green-400 rounded-full"></span>
          </div>

          <div>
            <button onClick={() => {}}>wallet</button>
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24} />
            </button>
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
