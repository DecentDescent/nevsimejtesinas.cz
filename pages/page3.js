import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp3 from "../components/Comp3";

export default () => (
  <div>
    <Head title="Page 3" />
    <Comp3 />
    <Link href="/index">
      <a>BACK</a>
    </Link>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://dist-vvyimvmjvb.now.sh/page3">
      SHARE
    </a>
  </div>
);
