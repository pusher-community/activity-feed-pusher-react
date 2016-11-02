var Event = React.createClass({
  render: function() {
    var name = this.props.event.name;
    var id = this.props.event.id;
    var date = moment(this.props.event.date).fromNow();
    var measure = this.props.event.measure;
    var unit = this.props.event.unit;

    return (
      <li className={'evt'}>
        <div className={'evt-name'}>{name}:</div>
        <div className={'evt-id'}>{id}</div>
        <div className={'evt-date'}>{date}</div>
        <div className={'evt-measure'}>{measure}&deg;{unit}</div>
      </li>
    );
  }
});