import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp2 from "../components/Comp2";

export default () => (
  <div>
    <Head title="Page 2" />
    <Comp2 />
    <Link href="/index">
      <a>BACK</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://dist-vvyimvmjvb.now.sh/page2">
      SHARE
    </a>
  </div>
);
