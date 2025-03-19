"use client";

import Sidebar from "@/components/shared/Sidebar";
import { Menu } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

const DashboardOutlet = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (bodyRef.current && !bodyRef.current.contains(event.target as Node)) {
      setOpenSidebar(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
  return (
    <div className="flex justify-between">
      <div
        ref={bodyRef}
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-[300px] absolute left-0 z-[99999] shadow-2xl lg:static duration-300`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`flex-1 bg-slate-100 rounded-xl lg:ml-2 text-black min-h-screen  ${
          openSidebar ? "opacity-70" : "opacity-100"
        } lg:opacity-100 duration-300`}
      >
        <button
          className="lg:hidden absolute top-4 left-2 sm:top-5 sm:left-3 bg-blue-400 rounded-full p-2 text-white"
          onClick={toggleSidebar}
        >
          <Menu className="size-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default DashboardOutlet;
