import Link from "next/link";

const Copyright = () => {
  return (
    <p className="text-md text-secondary font-poppins text-center">
      &copy; {new Date().getFullYear()} made by{" "}
      <span className="border-love hover:text-love border-b-2 border-dotted font-bold transition-all duration-300">
        <Link href="https://github.com/xshubhamg" target="_blank">
          Xshubhamg
        </Link>
      </span>
      . All rights reserved.
    </p>
  );
};

export default Copyright;
