import Head from "next/head";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Page</title>
        <meta name="keywords" content="countries" />
      </Head>

      <h1>Home Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, unde
        illo voluptatum blanditiis placeat itaque impedit aspernatur et ipsam
        ut? Praesentium saepe quibusdam vero velit necessitatibus sit ipsum vel
        maxime!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto
        ducimus quas quasi voluptate ut quo labore sunt? Nihil obcaecati sed
        accusantium itaque! Fugit quas laborum, reiciendis esse voluptate
        temporibus.
      </p>
      <Link href="/countries">
        <a>countries</a>
      </Link>
    </div>
  );
}
