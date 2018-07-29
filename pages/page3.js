import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp3 from "../components/Comp3";

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Comp3 />
    <Link href="/index">
      <a>here</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=page3">SHARE</a>
  </div>
);
