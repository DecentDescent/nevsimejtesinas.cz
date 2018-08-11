import "../styles/styles.scss";
import Head from "../components/Head";
import Preloader from "../components/Preloader";
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
          title="Chagasova choroba - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          description="Můj čas přichází hlavně v noci, kdy z blátěných stěn a slaměných střech domů vylézají krev sající „líbající brouci“. Jejich polibek je často mou jízdenkou do lidských těl. Ačkoliv se mi do nich daří pronikat třeba i při transfuzi nebo kojení. Mé oběti o mně nemusí vědět ani celá léta, odhalit mne nejde jen tak."
          ogTitle="Chagasova choroba - Nevšímejte si nás! Kala Azar a spol. - Lékaři bez hranic"
          ogDescription="Můj čas přichází hlavně v noci, kdy z blátěných stěn a slaměných střech domů vylézají krev sající „líbající brouci“. Jejich polibek je často mou jízdenkou do lidských těl. Ačkoliv se mi do nich daří pronikat třeba i při transfuzi nebo kojení. Mé oběti o mně nemusí vědět ani celá léta, odhalit mne nejde jen tak."
          ogImage={myUrl + "/static/img/og/chagasova-choroba.jpg"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header />
        <Preloader />
        <Disease
          name="chagasova-choroba"
          title="Chagasova choroba"
          description="Můj čas přichází hlavně v noci, kdy z blátěných stěn a slaměných střech domů vylézají krev sající „líbající brouci“. Jejich polibek je často mou jízdenkou do lidských těl. Ačkoliv se mi do nich daří pronikat třeba i při transfuzi nebo kojení. Mé oběti o mně nemusí vědět ani celá léta, odhalit mne nejde jen tak. Nejdříve se vyznačuji mírností, projevuji se jako jiné nemoci, třeba horečkami, únavou, bolestmi, zvracením. Pokud se rozhodnu zabydlet natrvalo, usídlím se v nervovém systému, trávicím traktu a navždy poškozuji srdce… Porazit mě může jen málo léků a ještě je na mě musíte vytáhnout brzy. Hnízdím v nejméně šesti milionech lidí, ročně zabiju na osm tisíc z nich. Útočím takřka výlučně v Latinské Americe, ačkoliv mí hostitelé mne mohou převézt kamkoliv. Není to báječné?"
          backButton="true"
        />
        {/* <a
          className="btn"
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" +
            myUrl +
            "/chagasova-choroba"
          }
        >
          Sdílet
        </a> */}
      </div>
    );
  };
}
