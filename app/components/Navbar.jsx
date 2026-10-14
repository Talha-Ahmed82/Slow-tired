"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "OUR STORY", href: "/" },
  { name: "MISSION", href: "/about" },
  { name: "COMMUNITY", href: "/services" },
  { name: "EVENTS", href: "/projects" },
  { name: "CONNECTS", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex shrink-0 items-center"
          aria-label="Go to homepage"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-white.png"
            alt="Website Logo"
            width={160}
            height={55}
            priority
            className="h-auto max-h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition-colors duration-200 hover:text-gray-300 xl:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-6 flex-col gap-[6px]">
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[8px] rotate-45"
                  : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-[8px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black px-6 transition-all duration-300 lg:hidden ${
            menuOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium text-white transition-colors duration-200 hover:text-gray-400 sm:text-2xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}