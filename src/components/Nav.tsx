"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "Schedule" },
    { href: "/syllabus", label: "Syllabus" },
    { href: "/activities", label: "In-Class Activities" },
    { href: "/assignments", label: "Assignments" },
    { href: "/resources/html", label: "Resources" },
  ];

  // Only run on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" suppressHydrationWarning>
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="border-transparent dark:border-gray-800 text-black dark:text-white font-bold text-xl !border-0"
            suppressHydrationWarning
          >
            MSER 521
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.slice(1).map((item) => {
            const isActive = mounted && normalizePath(pathname) === normalizePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors dark:hover:!text-sky-300 hover:!text-sky-700 hover:!border-sky-700 ${
                  isActive
                    ? "!font-semibold !border-sky-700 dark:!border-sky-300 text-black dark:!text-white"
                    : "!border-transparent !hover:border-sky-700 text-black dark:!text-white"
                }`}
                suppressHydrationWarning
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
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
        <div className="border-t border-gray-200 dark:border-gray-700 mobile-nav-border">
          {navItems.slice(1).map((item) => {
            const isActive = mounted && normalizePath(pathname) === normalizePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 font-semibold !border-gray-100 dark:!border-gray-800"
                    : "!border-transparent"
                }`}
                suppressHydrationWarning
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
