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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">H&V</span>
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-light-text dark:text-dark-text">
              Harbor & Voyage
            </h1>
            <p className="text-xs text-light-text/70 dark:text-dark-text/70">
              {theme === "light"
                ? "바다를 향한 하루의 준비"
                : "달빛 아래 펼쳐지는 모험"}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
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
