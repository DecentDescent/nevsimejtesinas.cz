import "../styles/styles.scss";
import Head from "next/head";

export default ({ title, description, ogImage }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title || "Nevšímejte si nás! - Lékaři bez hranic"}</title>
    <meta
      name="description"
      content={
        description ||
        "V naší temné říši žije půl druhé miliardy lidí. Vládneme jím a nikdo se nám do toho moc neplete. Tedy… Skoro nikdo. Najdou se záškodníci, jako třeba Lékaři bez hranic, ale sami na nás nestačí. Říkají nám opomíjené choroby. Protože svět skoro nezajímáme. Nejvíce se nám daří v chudých oblastech, kde naši hostitelé nemají peníze na léky. Na některé z nás ani efektivní medicína neexistuje, farmaceutické firmy by nevydělaly. Naši nepřátelé mají v rukách slabé zbraně – často zastaralé léky objevené před desítkami let. Co na to říct? Jen tak dál. Nevšímejte si nás. Nám to vyhovuje…"
      }
    />
    <meta
      property="og:title"
      content={title || "Nevšímejte si nás! - Lékaři bez hranic"}
    />
    <meta
      property="og:description"
      content={
        description ||
        "V naší temné říši žije půl druhé miliardy lidí. Vládneme jím a nikdo se nám do toho moc neplete. Tedy… Skoro nikdo. Najdou se záškodníci, jako třeba Lékaři bez hranic, ale sami na nás nestačí. Říkají nám opomíjené choroby. Protože svět skoro nezajímáme. Nejvíce se nám daří v chudých oblastech, kde naši hostitelé nemají peníze na léky. Na některé z nás ani efektivní medicína neexistuje, farmaceutické firmy by nevydělaly. Naši nepřátelé mají v rukách slabé zbraně – často zastaralé léky objevené před desítkami let. Co na to říct? Jen tak dál. Nevšímejte si nás. Nám to vyhovuje…"
      }
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="og:url" content="https://www.lekari-bez-hranic.cz" />
    <meta name="og:image" content={ogImage || "/static/img/og/og-main.jpg"} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/favicon-16x16.png"
    />
    <link
      rel="manifest"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/manifest.json"
    />
    <link
      rel="mask-icon"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="theme-color" content="#ffffff" />
    <link rel="stylesheet" href="/_next/static/style.css" />
  </Head>
);
