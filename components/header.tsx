import ThemeSwitcher from "./ui/theme-switcher";
import Logo from "./ui/logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="bg-surface border-subtle/50 border-b px-2 py-6">
      <div className="container mx-auto flex items-center gap-16">
        <Logo />
        <Navbar />
        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
