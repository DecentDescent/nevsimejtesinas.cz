import "../styles/styles.scss";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Comp3 from "../components/Comp3";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Link from "next/link";
export default () => (
  <div className="index">
    <Head />
    <Nav />
    <Link href="/page3">
      <a>3 page</a>
    </Link>
    <div>Hello</div>
    <Comp1 />
    <Comp2 />
    <Comp3 />
  </div>
);
