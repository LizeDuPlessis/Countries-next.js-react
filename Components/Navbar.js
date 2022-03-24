import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Image src="/flags.jpg" width={100} height={100} />
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
