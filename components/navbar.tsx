"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscClose, VscMenu } from "react-icons/vsc";
import { ColorModeSwitcher } from "./color-mode-switcher";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MenuToggle: React.FC = () => {
    return (
      <div
        className="block md:hidden cursor-pointer w-[35px] h-[35px]"
        onClick={toggle}
      >
        {isOpen ? <VscClose size={35} /> : <VscMenu size={35} />}
      </div>
    );
  };

  const Logo: React.FC = () => {
    return (
      <Link href="/" className="flex items-center">
        <div className="flex flex-row items-center">
          <Image
            src="/logo192.png"
            alt="Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-3xl font-bold ml-2">Nulithic</span>
        </div>
      </Link>
    );
  };

  interface MenuItemProps {
    children: React.ReactNode;
    to: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => {
    return (
      <Link href={to} className="block">
        <span className="block">{children}</span>
      </Link>
    );
  };

  const MenuLinks: React.FC = () => {
    return (
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block flex-1 md:flex-none`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 pt-4 md:pt-0">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/services">Services</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <ColorModeSwitcher />
        </div>
      </div>
    );
  };

  const NavBarContainer: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap w-full p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 text-black dark:text-white z-50 shadow-sm">
        {children}
      </nav>
    );
  };

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle />
      <MenuLinks />
    </NavBarContainer>
  );
};

export default Navbar;

