import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Link href="https://github.com/xshubhamg" target="_blank">
        <GitHubLogoIcon className="hover:text-iris text-secondary h-7 w-7 transition-all duration-300 hover:-translate-y-1 hover:transform-3d" />
      </Link>
      <Link href="https://x.com/xshubhamg" target="_blank">
        <TwitterLogoIcon className="hover:text-foam text-secondary h-7 w-7 transition-all duration-300 hover:-translate-y-1 hover:transform-3d" />
      </Link>
      <Link href="https://linkedin.com/in/xshubhamg" target="_blank">
        <LinkedInLogoIcon className="hover:text-pine text-secondary h-7 w-7 transition-all duration-300 hover:-translate-y-1 hover:transform-3d" />
      </Link>
      <Link href="https://instagram.com/shubhamm1215" target="_blank">
        <InstagramLogoIcon className="hover:text-love text-secondary h-7 w-7 transition-all duration-300 hover:-translate-y-1 hover:transform-3d" />
      </Link>
      <Link href="mailto:shubhammgiri3@gmail.com" target="_blank">
        <EnvelopeClosedIcon className="hover:text-gold text-secondary h-7 w-7 transition-all duration-300 hover:-translate-y-1 hover:transform-3d" />
      </Link>
    </div>
  );
};

export default SocialLinks;
