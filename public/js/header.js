var Header = React.createClass({
  render: function() {
    return (
      <div className={'navbar navbar-inverse navbar-default'} role="navigation">
        <div className={'container navbar-container'}>
          <div className={'navbar-header'}>
            <button type="button" className={'navbar-toggle'} data-toggle="collapse" data-target=".navbar-collapse">
              <span className={'sr-only'}>Toggle navigation</span>
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
            </button>
            <div className={'navbar-brand'}>
              <a href="/"><img className={'full-logo'} src="images/pusher-logo.png" width="111" height="37"/></a>
              <a href="/"><img className={'small-logo'} src="images/pusher-logo-p.png" height="37"/></a>
            </div>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav" id="nav-ul">
              <li><a className="signup-link" href="http://pusher.com/signup">Create a Free Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});