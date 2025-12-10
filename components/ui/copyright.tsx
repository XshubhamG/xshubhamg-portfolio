import Link from "next/link";

const Copyright = () => {
  return (
    <p className="text-secondary font-poppins text-subtle text-center sm:text-lg">
      &copy; {new Date().getFullYear()} made by{" "}
      <span className="border-love hover:text-love text-text border-b-2 border-dotted font-bold transition-all duration-300">
        <Link href="https://github.com/xshubhamg" target="_blank">
          Xshubhamg
        </Link>
      </span>
      . All rights reserved.
    </p>
  );
};

export default Copyright;
