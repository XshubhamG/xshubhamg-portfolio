import SocialLinks from "./ui/social-links";
import Copyright from "./ui/copyright";

const Footer = () => {
  return (
    <footer className="bg-surface border-subtle/50 border-t px-2 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:justify-between">
        <Copyright />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
