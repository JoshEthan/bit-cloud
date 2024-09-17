"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from "@/state";
import { Bell, Icon, LucideIcon, Moon, Sun, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const NavBarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: NavbarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/home");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }
      hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
        isActive ? "bg-blue-200 text-white" : ""
      }
      }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700
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
    <div className="flex justify-between items-center w-full mb-7">
      {/* Left */}
      <div className="flex justify-between items-center gap-5">
        <div>logo</div>

        <h1 className="hidden lg:flex font-extrabold text-2xl">BitCloud</h1>

        <hr className="hidden lg:flex w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
        <NavBarLink href="/exchange" label="Exchange" />
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
