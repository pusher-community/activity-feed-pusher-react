var App = React.createClass({
  getInitialState: function() {
    return { events: [] };
  },

  componentWillMount: function() {
    this.pusher = new Pusher(PUSHER_APP_KEY, {
      encrypted: true,
    });
    this.channel = this.pusher.subscribe('events_to_be_shown');
  },

  componentDidMount: function() {
    this.channel.bind('created', this.updateEvents);
    this.channel.bind('updated', this.updateEvents);
    this.channel.bind('deleted', this.updateEvents);
  },

  componentWillUnmount: function() {
    this.channel.unbind();

    this.pusher.unsubscribe(this.channel);
  },

  updateEvents: function(data) {
    var newArray = this.state.events.slice(0);
    newArray.unshift(data);

    this.setState({
      events: newArray,
    });
  },

  render: function() {
    return (
      <div>
        <Header  />
        <Events events={this.state.events} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));