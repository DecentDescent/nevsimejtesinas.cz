export default class Disease extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    var onChange = function(isVisible) {
      const visibility = isVisible ? "visible" : "hidden";
    };
    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id={this.props.name}
            className={
              "section" +
              " " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="section__left">
              <img src={"/static/img/bg-" + this.props.name + ".jpg"} />
            </div>
            <div className="section__right">
              <div className="container container--narrow">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="container container--narrow container--btn">
                <a className="btn">Oslabit Nemoc</a>
              </div>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
