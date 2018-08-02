import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const url =
      req && req.headers && req.headers.host
        ? "https://" + req.headers.host
        : window.location.origin;
    return { myUrl: url };
  }

  render = () => <div>Not so smart</div>;
}
