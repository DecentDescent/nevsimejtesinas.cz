export default class ShareModal extends React.Component {
  render() {
    return (
      <div className="share-modal share-modal--opened">
        <a onClick={this.props.handler} className="modal__close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </a>
        <div className="container container--narrow">
          <h3>Varujte před {this.props.copy}!</h3>
          <p>Nenechte nemoc se šířit a šiřte povědomí o ni. To ji oslabuje.</p>
          <div
            className="sharing-avatar"
            style={{
              backgroundImage: "url(static/sharing-" + this.props.name + ".jpg"
            }}
          />
        </div>
      </div>
    );
  }
}
