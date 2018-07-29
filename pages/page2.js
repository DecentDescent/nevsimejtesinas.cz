import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp2 from "../components/Comp2";

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Comp2 />
    <Link href="/index">
      <a>here</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=page2">SHARE</a>
  </div>
);
