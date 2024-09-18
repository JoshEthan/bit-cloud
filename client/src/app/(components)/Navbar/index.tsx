"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from "@/state";
import { Bell, Moon, Sun, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavBarLink = ({ href, label }: NavbarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/home");

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center`}>
        <span
          className={`text-xl	font-medium hover:text-gray-900 ${
            isActive ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full my-8 px-96">
      {/* Left Side*/}
      <div className="flex justify-between items-center gap-5">
        <div>logo</div>
        <h1 className="hidden lg:flex font-bold text-2xl">BitCloud</h1>
        <hr className="hidden lg:flex w-0 h-12 border border-solid border-l border-gray-300 mx-3" />
      </div>

      <div>
        {/* LINKS */}
        <div className="flex justify-between px-32 gap-10">
          <NavBarLink href="/exchange" label="Exchange" />
          <NavBarLink href="/buy" label="Buy Crypto" />
          <NavBarLink href="/market" label="Market" />
          <NavBarLink href="/discover" label="Discover" />
        </div>
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
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
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
