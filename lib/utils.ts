import { clsx, type ClassValue } from "clsx";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isFirefox = () => {
  if (typeof window === "undefined") return false;
  return navigator.userAgent.toLowerCase().includes("firefox");
};

export const animateFirefox = async (nextTheme: string) => {
  const { setTheme } = useTheme();
  await document.startViewTransition(() => {
    flushSync(() => setTheme(nextTheme));
  }).ready;

  document.documentElement.animate(
    { opacity: [0, 1] },
    {
      duration: 500,
      easing: "ease-out",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
