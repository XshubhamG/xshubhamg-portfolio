"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@base-ui-components/react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { isFirefox, animateFirefox } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = async () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    const isSupported =
      document.startViewTransition !== undefined &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!mounted || !isSupported) return setTheme(nextTheme);

    if (isFirefox()) return await animateFirefox(nextTheme);
    return await animateChromium(nextTheme);
  };

  const animateChromium = async (nextTheme: string) => {
    const button = buttonRef.current;
    if (!button) return;

    const { top, left, width, height } = button.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  if (!mounted) return <div className="size-11" />;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "hover:bg-highlight-high relative flex size-11 items-center justify-center rounded-md border border-transparent",
        "focus-visible:ring-highlight-high transition-colors focus-visible:ring-1 focus-visible:outline-none",
      )}
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center">
        <SunIcon
          className={cn(
            "absolute size-6 scale-100 rotate-0 transition-all duration-300",
            isDark ? "scale-100 rotate-0" : "scale-0 rotate-90",
          )}
        />
        <MoonIcon
          className={cn(
            "absolute size-6 scale-0 rotate-90 transition-all duration-300",
            isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0",
          )}
        />
      </div>
    </Button>
  );
}
