import SocialLinks from "../ui/social-links";
import Copyright from "../ui/copyright";

const Footer = () => {
  return (
    <footer className="bg-surface border-subtle/50 border-t">
      <div className="flex w-full flex-col items-center justify-center gap-5 px-2 py-6 sm:flex-row sm:justify-between sm:px-6 lg:container lg:px-4">
        <Copyright />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
