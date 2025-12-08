"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  return (
    <nav className="font-iceberg flex items-center gap-16 text-2xl font-semibold">
      <Link
        href="/blogs"
        className={cn(
          "hover:text-iris border-iris border-dotted pb-1 hover:border-b-2",
          isActive("blogs") && "text-iris border-b-2",
        )}
      >
        Blogs
      </Link>

      <Link
        href="/notes"
        className={cn(
          "hover:text-gold border-iris border-dotted pb-1 hover:border-b-2",
          isActive("notes") && "text-gold border-b-2",
        )}
      >
        Notes
      </Link>

      <Link
        href="/about"
        className={cn(
          "hover:text-love border-iris border-dotted pb-1 hover:border-b-2",
          isActive("about") && "text-love border-b-2",
        )}
      >
        About
      </Link>
      <Link
        href="/connect"
        className={cn(
          "hover:text-foam border-iris border-dotted pb-1 hover:border-b-2",
          isActive("connect") && "text-foam border-b-2",
        )}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
