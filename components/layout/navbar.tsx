"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
  activeStyle: string;
  hoverStyle: string;
}

const navLinks: NavLink[] = [
  {
    name: "Blogs",
    href: "/blogs",
    activeStyle: "text-iris border-b-2 border-iris",
    hoverStyle: "hover:text-iris hover:border-b-2 hover:border-iris",
  },
  {
    name: "Notes",
    href: "/notes",
    activeStyle: "text-gold border-b-2 border-gold",
    hoverStyle: "hover:text-gold hover:border-b-2 hover:border-gold",
  },
  {
    name: "About",
    href: "/about",
    activeStyle: "text-love border-b-2 border-love",
    hoverStyle: "hover:text-love hover:border-b-2 hover:border-love",
  },
  {
    name: "Contact",
    href: "/contact",
    activeStyle: "text-foam border-b-2 border-foam",
    hoverStyle: "hover:text-foam hover:border-b-2 hover:border-foam",
  },
];

interface NavbarProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar = ({ isMobile = false, onLinkClick }: NavbarProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  if (isMobile) {
    return (
      <nav
        className="flex flex-col px-6 py-5"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ name, href, activeStyle, hoverStyle }, index) => (
          <Link
            href={href}
            key={name}
            onClick={onLinkClick}
            className={cn(
              "font-iceberg border-subtle/30 border-b py-4 text-xl font-semibold transition-colors duration-200",
              "hover:pl-2",
              hoverStyle,
              isActive(href) && activeStyle,
              index === navLinks.length - 1 && "border-b-0",
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav
      className="font-iceberg flex items-center gap-6 text-2xl font-semibold lg:gap-10"
      role="navigation"
      aria-label="Desktop navigation"
    >
      {navLinks.map(({ name, href, activeStyle, hoverStyle }) => (
        <Link
          href={href}
          key={name}
          onClick={onLinkClick}
          className={cn(
            "border-dotted pb-1 transition-colors duration-200",
            hoverStyle,
            isActive(href) && activeStyle,
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
