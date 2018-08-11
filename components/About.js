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
            id="o-projektu"
            className={
              "section " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2>Projekt Nevšímejte si nás! Kala Azar a spol.</h2>
              <p>
                Zatímco čtete tento text, mimo zájem světa umírají lidé na
                opomíjené nemoci, jako jsou spavá nemoc, kala azar, Chagasova
                choroba, horečka dengue, viry Chikungunya a další. Umírají,
                protože pokulhává prevence, neexistují spolehlivé a snadno
                použitelné diagnostické metody a chybí účinné léky (nebo jsou
                příliš drahé). Jelikož těmito chorobami trpí nejvíce lidé
                v chudých zemích, není pro farmaceutické společnosti vývoj léků
                na ně lukrativní. Lékaři bez hranic v řadě projektů pacienty
                trpící opomíjenými nemocemi léčí. Snaží se proto na problém
                upozorňovat – a to i skrze tuto výstavu, kde výtvarnice Toy_Box
                zpodobnila vybrané choroby coby démony. Lékaři bez hranic se
                zároveň spolu s dalšími snaží skrze Iniciativu za léky proti
                opomíjeným nemocem (DNDi) přispět i k vývoji léčby. Od roku
                2003, kdy iniciativa vznikla, se podařilo vyvinout například
                lepší způsoby léčení malárie, spavé nemoci nebo Chagasovy
                choroby u dětí. Pořád to ale nestačí. Pomoci můžete i vy, třeba
                podporou Lékařů bez hranic nebo upozorňováním na tyto nemoci
                skrze sociální sítě.
              </p>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
