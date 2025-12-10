import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { SocialLink } from "@/lib/types";

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/xshubhamg",
    target: "_blank",
    ariaLabel: "GitHub",
    color: "hover:text-iris",
    icon: (
      <GitHubLogoIcon className="size-8 transition-all duration-300 hover:-translate-y-1" />
    ) as React.ReactElement,
  },
  {
    href: "https://x.com/xshubhamg",
    target: "_blank",
    ariaLabel: "Twitter",
    color: "hover:text-foam",
    icon: (
      <TwitterLogoIcon className="size-8 transition-all duration-300 hover:-translate-y-1" />
    ) as React.ReactElement,
  },
  {
    href: "https://linkedin.com/in/xshubhamg",
    target: "_blank",
    ariaLabel: "LinkedIn",
    color: "hover:text-pine",
    icon: (
      <LinkedInLogoIcon className="size-8 transition-all duration-300 hover:-translate-y-1" />
    ) as React.ReactElement,
  },
  {
    href: "https://instagram.com/shubhamm1214",
    target: "_blank",
    ariaLabel: "Instagram",
    color: "hover:text-love",
    icon: (
      <InstagramLogoIcon className="size-8 transition-all duration-300 hover:-translate-y-1" />
    ) as React.ReactElement,
  },
  {
    href: "mailto:shubhammgiri2@gmail.com",
    target: "_blank",
    ariaLabel: "Email",
    color: "hover:text-gold",
    icon: (
      <EnvelopeClosedIcon className="size-8 transition-all duration-300 hover:-translate-y-1" />
    ) as React.ReactElement,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 sm:gap-7">
      {socialLinks.map(({ href, target, ariaLabel, color, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          target={target}
          aria-label={ariaLabel}
          className={`text-subtle transition-all duration-300 hover:-translate-y-1 ${color}`}
        >
          {Icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
