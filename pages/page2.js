import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp2 from "../components/Comp2";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head title="Page 2" />
        <Comp2 />
        <Link href="/index">
          <a>BACK</a>
        </Link>
        <a
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" + myUrl + "/page2"
          }
        >
          SHARE
        </a>
      </div>
    );
  };
}
