"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/app/ui/common/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { number: "01", text: "For Patients", href: "/patients" },
    { number: "02", text: "For Clinicians", href: "/clinicians" },
    { number: "03", text: "For Research", href: "/research" },
    { number: "04", text: "Products", href: "/products" },
    { number: "05", text: "Contact Us", href: "/contact" },
  ];

  function handleMenuClick() {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  }

  return (
    <header className="absolute w-full bg-transparent z-50">
      <div
        className={clsx({
          "bg-black": isMenuOpen,
        })}
      >
        <div className="max-w-[100rem] mx-auto flex justify-between items-center pt-8 pb-4 px-4 sm:px-6 lg:px-8">
          {/* Left side wrapper for menu and logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-4 inline-flex items-center justify-center text-white hover:text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image
                  src="/hamburger.svg"
                  alt="Menu"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
              )}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={handleMenuClick}
              >
                <Image
                  src="/logo.png"
                  alt="Head Diagnostics Logo"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          <div
            className={clsx("flex items-center", {
              hidden: isMenuOpen,
            })}
          >
            <div className="hidden min-[1070px]:flex items-center">
              {/* Desktop Navigation */}
              <nav className="flex space-x-8 bg-white/5 backdrop-blur-sm px-6 py-1 rounded-lg">
                {menuItems.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="text-base text-white hover:text-white/80 transition-colors group relative pt-4 pb-2"
                  >
                    <span className="absolute top-0 right-0 text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                      {item.number}
                    </span>
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA Button */}
            <Button href="/contact" className="hidden min-[400px]:block ml-8">
              Let&apos;s talk
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute h-screen top-full left-0 right-0 bg-black">
              <div className="max-w-[100rem] mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="block px-4 py-4 flex items-center justify-between rounded-md text-xl font-bold text-white hover:text-white/80 hover:bg-white/10 transition-colors group"
                    onClick={handleMenuClick}
                  >
                    {item.text}
                    <span className="text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                      {item.number}
                    </span>
                  </Link>
                ))}
                <br />
                <Button
                  href="/contact"
                  className="block w-full px-4 py-4 text-xl"
                  onClick={handleMenuClick}
                >
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
