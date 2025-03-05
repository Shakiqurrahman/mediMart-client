"use client";

import logo from "@/assets/Medimart-logo.jpg";
import { navLinks } from "@/constants/navLinksData";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="max-width flex items-center justify-between h-20">
      <div>
        <Image src={logo} alt="Medi Mart Logo" className="w-40" />
      </div>
      <div className="flex items-center border border-blue-400 h-10 max-w-[400px] w-full">
        <input
          type="text"
          name="searchInput"
          className="outline-none w-full  py-1 pl-4"
        />
        <button
          type="button"
          className="bg-blue-400 text-white p-2 h-full flex items-center justify-center border border-blue-400"
        >
          <Search />
        </button>
      </div>
      <nav>
        <ul
          className={`md:flex ${
            isOpen
              ? "flex flex-col absolute md:static top-20 md:top-0 bg-body/80 backdrop-blur-md w-full text-center left-0 py-10 md:py-0 h-screen md:h-auto z-[9999]"
              : "hidden absolute md:static top-0"
          } md:flex-row gap-8  duration-300`}
        >
          {navLinks.map(({ label, path }, idx) => (
            <li key={idx} onClick={handleClose}>
              <Link
                href={path}
                className={`hover:text-main duration-300 font-medium text-[15px] ${
                  pathname === path ? "text-main" : "text-gray-900/55"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
