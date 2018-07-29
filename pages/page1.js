import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp1 from "../components/Comp1";

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Comp1 />
    <Link href="/index">
      <a>here</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=page1">SHARE</a>
  </div>
);
