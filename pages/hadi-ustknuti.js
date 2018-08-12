import "../styles/styles.scss";
import Head from "../components/Head";
import Header from "../components/Header";
import Disease from "../components/Disease";
import Link from "next/link";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head
          title="Hadí uštknutí - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          description="Až donedávna jsem bylo tak opomíjené, že jsem nebylo ani na seznamu opomíjených nemocí Světové zdravotnické organizace (WHO). Mí vyslanci – hadi – přitom uštknou pět milionů lidí ročně. Podlehne mi přes sto tisíc z nich, dalších čtyři sta tisíc zanechám zmrzačených (někdy jim musí amputovat třeba nohu)."
          ogTitle="Hadí uštknutí - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          ogDescription="Až donedávna jsem bylo tak opomíjené, že jsem nebylo ani na seznamu opomíjených nemocí Světové zdravotnické organizace (WHO). Mí vyslanci – hadi – přitom uštknou pět milionů lidí ročně. Podlehne mi přes sto tisíc z nich, dalších čtyři sta tisíc zanechám zmrzačených (někdy jim musí amputovat třeba nohu)."
          ogImage={myUrl + "/static/img/og/hadi-ustknuti.jpg"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header type="single-page" />
        <Disease
          name="hadi-ustknuti"
          title="Hadí uštknutí"
          description="Až donedávna jsem bylo tak opomíjené, že jsem nebylo ani na seznamu opomíjených nemocí Světové zdravotnické organizace (WHO). Mí vyslanci – hadi – přitom uštknou pět milionů lidí ročně. Podlehne mi přes sto tisíc z nich, dalších čtyři sta tisíc zanechám zmrzačených (někdy jim musí amputovat třeba nohu). Jsem skoro všude, nejvíce si libuji na odlehlém venkově, kde není dost lékařů, a nemají tam peníze na drahá séra. Třeba v Africe potřebují sérum účinné na vícero druhů jedů. Jedno měli, účinkovalo proti mým deseti obdobám! Ale farmaceutická firma ho přestala vyrábět (hádejte – nebylo to lukrativní). Teď se tam trápí se séry, jež zabírají proti menšímu počtu mých obdob. Mé oběti obvykle neví, který můj hadí delegát je navštívil, a tak si musí zdravotníci pořádně lámat hlavu, jak na mě. Loni jsem však lehce znervóznělo, WHO mě zařadilo na ten svůj seznam. Ale uvidíme…"
          singlePage="is-single-page"
          direction="ltr"
        />
      </div>
    );
  };
}
