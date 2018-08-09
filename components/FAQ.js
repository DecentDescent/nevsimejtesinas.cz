export default class FAQ extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id="casto-kladene-dotazy"
            className={
              "section section--inverted section--padding " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2>
                Často kladené dotazy týkající se výstavy a webu „Nevšímejte si
                nás! Kala Azar a spol.“
              </h2>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>
                    Proč jste se rozhodli prezentovat opomíjené nemoci coby
                    démony? Chcete lidi děsit?
                  </h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Nechceme nikoho děsit, ale zároveň chceme ukázat, o jak
                    vážné a hrozné nemoci se jedná. Jak říká autorka obrazů
                    ilustrátorka Toy_Box: „Šlo nám o to, aby bylo sdělení
                    naléhavé, co nejpravdivější, ale bez doslovnosti." Toy_Box
                    se při vymýšlení postav jednotlivých démonů nechala
                    inspirovat jak beznadějí a hrůzou, jíž musejí zažívat lidé,
                    kteří jsou těmito chorobami postiženi, tak různými pop
                    kulturními předlohami.
                  </p>
                </div>
              </div>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>Proč k nám promlouvají přímo opomíjené nemoci/démoni?</h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Už zpodobnění opomíjených nemocí coby démonů je
                    personifikace. Přišlo nám logické v ní pokračovat. Tedy
                    nechat promlouvat samotné choroby. Co by nám asi řekly? V
                    současné době by nejspíše byly spokojené, sebevědomé,
                    nabubřelé, přidrzlé a vychloubačné. Vždyť se jim daří. Nikdo
                    se jim do cesty moc neplete, efektivní léky na ně buď skoro
                    neexistují, nebo byly vyvinuty před desítkami let a jsou
                    toxické, případně jsou příliš drahé a řada lidí na ně
                    nedosáhne.
                  </p>
                </div>
              </div>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>Co jsou opomíjené nemoci a proč jsou opomíjené?</h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Jde o choroby, u kterých pokulhává prevence, neexistují
                    spolehlivé a snadno použitelné diagnostické metody a chybí
                    účinné léky (nebo jsou příliš drahé). Konkrétně jde o kala
                    azar, Chagasovu chorobu, spavou nemoc, horečku dengue, viry
                    Chikungunya, virus Zika, virus MERS, krvácivé horečky (mezi
                    které patří i ebola nebo Marburg) a další nemoci podle
                    seznamu Světové zdravotnické organizace (WHO). Nejvíce se se
                    jim daří v chudých oblastech, kde lidé nemají peníze na
                    léčbu. Vývoj a výroba medicíny není pro farmaceutické
                    společnosti dost lukrativní. Tuberkulóza sice oficiálně
                    nepatří na seznam opomíjených nemocí WHO, ale zařadili jsme
                    ji na tento web a výstavu z toho důvodu, že je rovněž
                    přehlížena a vnímána spíše jako choroba minulosti, přitom
                    jde o největšího infekčního zabijáka v současné době.
                  </p>
                </div>
              </div>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>
                    Proč a jak se Lékaři bez hranic angažují v této
                    problematice?
                  </h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Lékaři bez hranic v řadě projektů pacienty trpící těmito
                    chorobami léčí. Zároveň se spolu s dalšími snaží skrze
                    Iniciativu za léky proti opomíjeným nemocem (DNDi) přispět k
                    vývoji léčby. Od roku 2003, kdy iniciativa vznikla, se
                    podařilo vyvinout například lepší způsoby léčení malárie,
                    spavé nemoci nebo Chagasovy choroby. Snaží se rovněž na
                    problém upozorňovat a situaci měnit – kupříkladu tlačí na
                    farmaceutické korporace, aby léky zbytečně nepředražovaly.
                  </p>
                </div>
              </div>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>
                    Proč by mě to mělo zajímat? Vyskytují se tyto nemoci v ČR?
                  </h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Opomíjené nemoci dnes ovlivňují půldruhé miliardy lidí na
                    celém světě. Lékaři bez hranic jsou přesvědčeni, že každý
                    člověk si zaslouží lékařskou péči, důstojnost a lidský
                    přístup. Krom toho dopady těchto chorob nejsou jen
                    zdravotní, ale mohou být ekonomické a politické. Mohou se
                    proto v dlouhodobém měřítku týkat nás všech. A byť se
                    častěji vyskytují mimo geografické šířky střední Evropy,
                    nejsou omezené pouze na rozvojové země. Tuberkulóza je i
                    v Česku. Počet pacientů s TBC v Česku sice kontinuálně
                    klesá, i tak ale loni dle Národní jednotky dohledu nad
                    tuberkulózou Nemocnice Na Bulovce tady zdravotníci léčili
                    471 lidí s touto nemocí.
                  </p>
                </div>
              </div>
              <div className="faq-block">
                <div className="faq-block__question">
                  <h3>K čemu je tento web dobrý?</h3>
                </div>
                <div className="faq-block__answer">
                  <p>
                    Smyslem webu je upozornit na problematiku opomíjených nemocí
                    způsobem, který je na jednu stranu inovativní, nevšední a
                    bez zbytečného žargonu, ale také informativní a užitečný.
                    Cílem je všimnout si problému, kterého si většina z nás
                    nevšímá, a přispět tak k jeho řešení.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
