import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-iceberg flex items-center gap-3 text-xl font-bold sm:gap-4 sm:text-2xl"
    >
      <div className="bg-overlay flex size-10 items-center justify-center rounded-sm transition-all duration-300 sm:size-11">
        <Image
          src="/profile.svg"
          alt="Logo"
          width={40}
          height={40}
          className="size-9 rounded-sm object-cover sm:size-10"
        />
      </div>
      <span className="first-letter:text-love hover:border-love hover:border-b-2 hover:border-dotted">
        Xshubhamg
      </span>
    </Link>
  );
};

export default Logo;
