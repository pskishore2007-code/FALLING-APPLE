"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Modules", href: "/modules" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);

  // Synchronize initial theme
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const timer = setTimeout(() => {
      setTheme(isDark ? "dark" : "light");
    }, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-3.5 group">
              <Image
                src="https://fallingapple.in/wp-content/uploads/2024/11/Falling-Apple-Logo.jpg"
                alt="Falling Apple STEM Academy Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover border border-border/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg leading-tight tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Falling Apple
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  STEM Academy
                </span>
              </div>
            </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-muted/50 ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-amber-400" />
              )}
            </button>

            {/* Book Free Demo Button */}
            <Link
              href="/contacts#enquiry"
              className="relative inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group overflow-hidden"
            >
              <span className="relative flex items-center gap-1.5 z-10">
                Book Trial Class
                <Sparkles className="h-4 w-4 animate-pulse-slow" />
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-muted/60 text-muted-foreground"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 text-amber-400" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border/40 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-border/40">
            <Link
              href="/contacts#enquiry"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-xl font-bold text-center text-white bg-gradient-to-r from-primary to-secondary shadow-lg active:scale-95 transition-all"
            >
              Book Trial Class
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
