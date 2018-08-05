export default ({ ...props }) => (
  <section id={props.name} className={"section " + props.type}>
    <div className="section__left" />
    <div className="section__right">
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  </section>
);
