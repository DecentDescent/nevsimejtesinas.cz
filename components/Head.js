import "../styles/styles.scss";
import Head from "next/head";

export default ({ title, description, ogImage }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>
      {title || "Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"}
    </title>
    <meta
      name="description"
      content={
        description ||
        "V naší temné říši žije půl druhé miliardy lidí. Vládneme jím a nikdo se nám do toho moc neplete. Tedy… Skoro nikdo. Najdou se záškodníci, jako třeba Lékaři bez hranic, ale sami na nás nestačí. Říkají nám opomíjené choroby. Protože svět skoro nezajímáme. Nejvíce se nám daří v chudých oblastech, kde naši hostitelé nemají peníze na léky. Na některé z nás ani efektivní medicína neexistuje, farmaceutické firmy by nevydělaly. Naši nepřátelé mají v rukách slabé zbraně – často zastaralé léky objevené před desítkami let. Co na to říct? Jen tak dál. Nevšímejte si nás. Nám to vyhovuje…"
      }
    />
    <meta
      property="og:title"
      content={
        title || "Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
      }
    />
    <meta
      property="og:description"
      content={
        description ||
        "V naší temné říši žije půl druhé miliardy lidí. Vládneme jím a nikdo se nám do toho moc neplete. Tedy… Skoro nikdo. Najdou se záškodníci, jako třeba Lékaři bez hranic, ale sami na nás nestačí. Říkají nám opomíjené choroby. Protože svět skoro nezajímáme. Nejvíce se nám daří v chudých oblastech, kde naši hostitelé nemají peníze na léky. Na některé z nás ani efektivní medicína neexistuje, farmaceutické firmy by nevydělaly. Naši nepřátelé mají v rukách slabé zbraně – často zastaralé léky objevené před desítkami let. Co na to říct? Jen tak dál. Nevšímejte si nás. Nám to vyhovuje…"
      }
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@msf_czech" />
    <meta name="twitter:creator" content="@msf_czech" />
    <meta name="og:url" content="https://www.lekari-bez-hranic.cz" />
    <meta
      name="og:image"
      content={ogImage || "/static/img/og/og-main.jpg?v=1"}
    />
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
    <script
      dangerouslySetInnerHTML={{
        __html: `
    var seznam_retargeting_id = 51769;`
      }}
    />

    <script type="text/javascript" src="//c.imedia.cz/js/retargeting.js" />
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1682163405329681');
  fbq('track', 'PageView');`
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1682163405329681&ev=PageView&noscript=1"
      />
    </noscript>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-824743007"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-824743007');`
      }}
    />
  </Head>
);
