"use client"; // This is a client-side only component
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavbarItem {
  label: string;
  page: string;
}

const NAVBAR_LINKS: Array<NavbarItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
];


const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = useState(false);

    return <header className="w-full h-16 bg-gray-900 text-gray-100">
        <div className="flex justify-between items-center h-full px-4">
            <div>
                <div>
                    <h2 className="text-2xl font-bold">
                        Hello
                    </h2>
                </div>
            </div>
            <div className="md:flex md:items-center md:space-x-4 hidden">
                {NAVBAR_LINKS.map((item, index) => {
                    return <a key={index}>{item.label}</a>
                })}
            </div>
        </div>
    </header>
};
export default Navbar;
