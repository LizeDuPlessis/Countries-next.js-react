import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/countries">
        <a>Countries</a>
      </Link>
    </div>
  );
};

export default Navbar;
