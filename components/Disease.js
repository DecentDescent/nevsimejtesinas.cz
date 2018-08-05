export default ({ ...props }) => (
  <section id={props.name} className={"section " + props.type}>
    <div className="section__background" />
    <div className="section__left" />
    <div className="section__right no-scroll">
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a className="btn">Oslabit Nemoc</a>
      </div>
    </div>
  </section>
);
