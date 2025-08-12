"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/syllabus", label: "Syllabus" },
    { href: "/", label: "Schedule" },
    { href: "/assignments", label: "Assignments" },
    { href: "/resources", label: "Resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="!border-white !text-black font-bold !text-xl">
              MSER 521
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:!text-sky-700 hover:!border-sky-700 ${
                  normalizePath(pathname) === normalizePath(item.href)
                    ? "!font-semibold !border-sky-700"
                    : "!border-white !hover:border-sky-700 !text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="border-t border-gray-200">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-colors hover:bg-gray-100 ${
                  normalizePath(pathname) === normalizePath(item.href)
                    ? "bg-gray-100 font-semibold !border-gray-100"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}
