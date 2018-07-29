import "../styles/styles.scss";
import Head from "next/head";

export default ({ title }) => (
  <Head>
    <link rel="stylesheet" href="/_next/static/style.css" />
    <title>{title || "Default Page"}</title>
  </Head>
);
