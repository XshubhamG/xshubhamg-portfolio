"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { flushSync } from "react-dom";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  const toggleTheme = async () => {
    if (
      !buttonRef.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      return;
    }

    await document.startViewTransition(() =>
      flushSync(() => setTheme(resolvedTheme === "dark" ? "light" : "dark")),
    ).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      onClick={toggleTheme}
      ref={buttonRef}
      className="relative h-8 w-8 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeSwitcher;
