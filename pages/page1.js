import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp1 from "../components/Comp1";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head title="Page 1" />
        <Comp1 />
        <Link href="/index">
          <a>BACK</a>
        </Link>
        <a
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" + myUrl + "/page1"
          }
        >
          SHARE
        </a>
      </div>
    );
  };
}
