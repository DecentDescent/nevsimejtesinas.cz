export default class About extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");
    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id="nevsimejte-si-nas"
            className={
              "section section--inverted " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2>Nevšímejte si nás!</h2>
              <p>
                V naší temné říši žije půl druhé miliardy lidí. Vládneme jim a
                nikdo se nám do toho moc neplete. Tedy… Skoro nikdo. Najdou se
                záškodníci, jako třeba Lékaři bez hranic, ale sami na nás
                nestačí. Říkají nám opomíjené choroby. Protože svět skoro
                nezajímáme. Nejvíc se nám daří v chudých oblastech, kde naši
                hostitelé nemají peníze na léky. Na některé z nás ani účinná
                medicína neexistuje, farmaceutické firmy by nevydělaly. Naši
                nepřátelé mají v rukách slabé zbraně – často zastaralé léky
                objevené před desítkami let. Co na to říct? Jen tak dál.
                Nevšímejte si nás. Nám to vyhovuje…
              </p>
              <p>S díky,</p>
              <p>Kala Azar a spol.</p>
              <p>
                P. S. Pokud někoho přeci jen zajímáme, níže se některé z nás
                představíme. Aby bylo jasno, že není radno si s námi zahrávat!
              </p>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
