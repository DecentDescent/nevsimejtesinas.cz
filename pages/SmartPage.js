import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import ReactGA from "react-ga";

export default class extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-50377630-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  static async getInitialProps({ req }) {
    const url =
      req && req.headers && req.headers.host
        ? "https://" + req.headers.host
        : window.location.origin;
    return { myUrl: url };
  }

  render = () => <div>Not so smart</div>;
}
