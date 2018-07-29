import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import Comp3 from "../components/Comp3";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head title="Page 3" />
        <Comp3 />
        <Link href="/index">
          <a>BACK</a>
        </Link>
        <a
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" + myUrl + "/page3"
          }
        >
          SHARE
        </a>
      </div>
    );
  };
}
