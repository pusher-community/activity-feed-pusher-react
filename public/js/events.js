var Events = React.createClass({
	render: function() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    var eventsLength = this.props.events.length;
    var eventsMapped = this.props.events.map(function (evt, index) {
      const key = eventsLength - index;
      return <Event event={evt} key={key} />
    });

    return <section className={'blue-gradient-background intro-splash splash'}>
             <div className={'container center-all-container'}>
               <h1 className={'white light splash-title'}>
                 Realtime Activity Feed with Pusher + React
               </h1>
               <ReactCSSTransitionGroup component="ul" className="evts" transitionName="evt-transition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                 {eventsMapped}
               </ReactCSSTransitionGroup>
             </div>
           </section>;
	}
});