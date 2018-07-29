import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp1 from "../components/Comp1";

export default () => (
  <div>
    <Head title="Page 1" />
    <Comp1 />
    <Link href="/index">
      <a>BACK</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://dist-vvyimvmjvb.now.sh/page1">
      SHARE
    </a>
  </div>
);
