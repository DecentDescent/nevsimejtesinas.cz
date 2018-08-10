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
          title="Spavá nemoc - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          description="Můj rajón je zejména v subsaharské Africe, hlavně D. R. Kongo je mé oblíbené. Do lidí pronikám díky mouchám tse-tse. Zprvu se mne lze poměrně snadno zbavit, ale odhalit mne není jednoduché. Jsem nenápadná a projevuji se podobně jako třeba malárie – horečkou, bolestí hlavy, slabostí, či bolením kloubů."
          ogTitle="Spavá nemoc - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          ogDescription="Můj rajón je zejména v subsaharské Africe, hlavně D. R. Kongo je mé oblíbené. Do lidí pronikám díky mouchám tse-tse. Zprvu se mne lze poměrně snadno zbavit, ale odhalit mne není jednoduché. Jsem nenápadná a projevuji se podobně jako třeba malárie – horečkou, bolestí hlavy, slabostí, či bolením kloubů."
          ogImage={myUrl + "/static/img/og/spava-nemoc.jpg"}
        />
        <Header />
        <Disease
          name="spava-nemoc"
          title="Spavá nemoc"
          description="Můj rajón je zejména v subsaharské Africe, hlavně D. R. Kongo je mé oblíbené. Do lidí pronikám díky mouchám tse-tse. Zprvu se mne lze poměrně snadno zbavit, ale odhalit mne není jednoduché. Jsem nenápadná a projevuji se podobně jako třeba malárie – horečkou, bolestí hlavy, slabostí, či bolením kloubů. Aby měli lékaři jistotu, musí mým hostitelům provést bolestivou lumbální punkci a vyšetřit mozkomíšní mok. Později jsem to už celá já, napadám centrální nervový systém a mé oběti nemohou v noci spát, spánek je přemáhá ve dne. Ale to už se zase hůře léčím. A pokud mne nechají být, zabíjím. Musím však přiznat: slábnu. Lidé si na mne dávají větší pozor, vniknu do několika tisíc z nich ročně. Ba co víc, před lety na mne vymysleli účinnější léčbu. Naštěstí je stále komplikovaná. Jen, aby se jim nepovedlo přijít ještě na to, jak mne lépe odhalit. To by snad byl můj konec."
        />
        <Link href="/index">
          <a className="btn">Zpět</a>
        </Link>
        <a
          className="btn"
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" +
            myUrl +
            "/spava-nemoc"
          }
        >
          Sdílet
        </a>
      </div>
    );
  };
}
