import SocialLinks from "../ui/social-links";
import Copyright from "../ui/copyright";

const Footer = () => {
  return (
    <footer className="bg-surface border-subtle/50 border-t px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-5 py-4 sm:flex-row sm:justify-between">
          <Copyright />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
