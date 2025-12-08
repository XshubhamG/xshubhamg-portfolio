import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-iceberg flex items-center gap-4 text-3xl font-bold"
    >
      <Image
        src="/profile.svg"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-md"
      />
      <span className="first-letter:text-love hover:border-love hover:border-b-2 hover:border-dotted">
        Xshubhamg
      </span>
    </Link>
  );
};

export default Logo;
