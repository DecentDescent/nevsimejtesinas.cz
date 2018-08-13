export default class Disease extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id={this.props.name}
            className={
              "section section--disease" +
              " " +
              this.props.singlePage +
              " section--" +
              this.props.direction +
              " " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="section__content">
              <div className="container container--narrow">
              <img src={"/_next/static/img/mobile/" + this.props.name + ".jpg"}
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="container container--narrow container--btn">
                <a
                  className="btn btn--share"
                  onClick={() =>
                    this.props.onShareClick(
                      this.props.name,
                      this.props.copyTitle
                    )
                  }
                >
                  Oslabit Nemoc
                </a>{" "}
                <a className="btn btn--back" href="/index">
                  Zpět na hlavní stránku
                </a>
              </div>
            </div>{" "}
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
