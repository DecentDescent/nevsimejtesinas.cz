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
          title="Tuberkulóza - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          description="Oficiálně možná nepatřím do spolku opomíjených nemocí, ale místo zde mi upřít nelze. Svět na mě skoro zapomněl, už ho neděsím jako dřív. Myslí si o mně, že jsem chorobou minulosti. Víc by se však mýlit nemohli. Jsem nejsmrtelnější infekcí na světě. V počtu obětí předčím HIV/AIDS. Ročně rozevřu náruč deseti milionům lidí, skoro dva miliony pošlu na onen svět."
          ogTitle="Tuberkulóza - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          ogDescription="Oficiálně možná nepatřím do spolku opomíjených nemocí, ale místo zde mi upřít nelze. Svět na mě skoro zapomněl, už ho neděsím jako dřív. Myslí si o mně, že jsem chorobou minulosti. Víc by se však mýlit nemohli. Jsem nejsmrtelnější infekcí na světě. V počtu obětí předčím HIV/AIDS. Ročně rozevřu náruč deseti milionům lidí, skoro dva miliony pošlu na onen svět."
          ogImage={myUrl + "/static/img/og/tuberkuloza.jpg"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header />
        <Disease
          name="tuberkuloza"
          title="Tuberkulóza"
          description="Oficiálně možná nepatřím do spolku opomíjených nemocí, ale místo zde mi upřít nelze. Svět na mě skoro zapomněl, už ho neděsím jako dřív. Myslí si o mně, že jsem chorobou minulosti. Víc by se však mýlit nemohli. Jsem nejsmrtelnější infekcí na světě. V počtu obětí předčím HIV/AIDS. Ročně rozevřu náruč deseti milionům lidí, skoro dva miliony pošlu na onen svět. Daří se mi v Indii, Číně, v Nigérii či v postsovětských zemích. Většinou jdu po plících, ale nepohrdnu ani kostmi a nervovým systémem. Zvlášť hrozivá jsem ve svých rezistentních formách. Těm se říká „ebola s křídly“, jsme totiž obě zhruba stejně smrtelné, ale mně stačí k šíření vzduch. Když už takto zesílím, zničit mě trvá dlouho a mí hostitelé trpí. Před pár lety na mou rezistenci vyrukovali se dvěma novými léky, ze kterých mám docela nahnáno. Ale jsou drahé a dostalo je zatím minimum lidí. Tak doufám, že na ně bude dál padat prach v regálech apatyk."
        />
        <Link href="/index">
          <a className="btn">Zpět</a>
        </Link>
        <a
          className="btn"
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" +
            myUrl +
            "/tuberkuloza"
          }
        >
          Sdílet
        </a>
      </div>
    );
  };
}
