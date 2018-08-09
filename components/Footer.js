export default class Footer extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor partialVisibility={true} offset={{ top: 0, bottom: 0 }}>
        {({ isVisible }) => (
          <footer
            className={
              "section section--footer section--inverted " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <p>
                2018 &copy; Lékaři bez hranic
                <br />
                <a href="http://www.lekari-bez-hranic.cz">
                  lekari-bez-hranic.cz
                </a>
              </p>
            </div>
          </footer>
        )}
      </VisibilitySensor>
    );
  }
}
