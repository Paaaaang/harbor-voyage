"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/20 dark:bg-black/20 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full flex items-center justify-center shadow-lg">
            {theme === "light" ? (
              // 태양 SVG
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="4" className="animate-pulse" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // 달 SVG
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                  className="animate-pulse"
                />
                <circle cx="16" cy="8" r="1" opacity="0.7" />
                <circle cx="18" cy="6" r="0.5" opacity="0.5" />
              </svg>
            )}
          </div>
          <div>
            <h1 className="text-xl font-black text-light-text dark:text-dark-text tracking-wider uppercase font-display">
              SPARROW
            </h1>
            <p className="text-xs text-light-text/70 dark:text-dark-text/70 font-light">
              {theme === "light"
                ? "바다를 향한 하루의 준비"
                : "달빛 아래 펼쳐지는 모험"}
            </p>
          </div>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300 cursor-none font-medium tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu - Right aligned */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-secondary/20 dark:bg-dark-secondary/20 hover:bg-light-secondary/40 dark:hover:bg-dark-secondary/40 transition-all duration-300"
            aria-label="테마 변경"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-light-text dark:text-dark-text" />
            ) : (
              <Sun className="w-5 h-5 text-light-text dark:text-dark-text" />
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-full bg-light-secondary/20 dark:bg-dark-secondary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-light-text dark:text-dark-text" />
            ) : (
              <Menu className="w-5 h-5 text-light-text dark:text-dark-text" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-md border-t border-light-secondary/20 dark:border-dark-secondary/20">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
