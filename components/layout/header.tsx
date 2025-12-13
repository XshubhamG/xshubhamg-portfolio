"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "../ui/theme-switcher";
import Logo from "../ui/logo";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!mobileMenuOpen || !menuRef.current || !toggleButtonRef.current) {
        return;
      }
      const target = event.target as Node;
      if (
        !menuRef.current.contains(target) &&
        !toggleButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchend", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchend", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="bg-surface/90 border-subtle/50 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-2 py-4 transition-all duration-300 sm:px-6 lg:container lg:px-4",
          isScrolled && "shadow-lg",
        )}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <Navbar onLinkClick={() => setMobileMenuOpen(false)} />
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex md:items-center">
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          {/* Hamburger Button */}
          <button
            ref={toggleButtonRef}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={cn(
              "relative flex size-11 items-center justify-center rounded-md",
              "hover:bg-highlight-high focus-visible:ring-highlight-high transition-colors focus-visible:ring-1 focus-visible:outline-none",
            )}
            aria-expanded={mobileMenuOpen}
            aria-haspopup="true"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                mobileMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "absolute inset-x-0 top-full md:hidden",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={cn(
            "border-subtle/50 bg-surface/95 w-full overflow-hidden border-b shadow-lg backdrop-blur-md transition-all duration-300",
            mobileMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-2 scale-95 opacity-0",
          )}
        >
          <Navbar isMobile onLinkClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={cn(
          "bg-base/50 fixed inset-0 -z-10 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
