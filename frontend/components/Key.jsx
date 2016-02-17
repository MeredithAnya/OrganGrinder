var React = require('react');
var TONES = require('../constants/Tones');
var Note = require('../util/Note');
var KeyStore = require('../stores/KeyStore');

var Key = React.createClass({
  getInitialState: function () {
    var freq = TONES[this.props.noteName];

    return {
      note: new Note(freq),
      pressed: false
    };
  },
  componentDidMount: function () {
    this.subscription = KeyStore.addListener(this._keysChanged);
  },
  componentWillUnmount: function () {
    this.subscription.remove();
  },
  _keysChanged: function () {
    if (KeyStore.all().indexOf(this.props.noteName) === -1) {
      this.state.note.stop();
      this.setState({pressed: false});
    } else {
      this.state.note.start();
      this.setState({pressed: true});
    }
  },
  render: function() {
    var classes = ["key"];
    if (this.props.noteName.slice(1) === "Sharp") {
      classes.push("sharp");
    }

    if (this.state.pressed) {
      classes.push("pressed");
    }
    return (
      <div className={classes.join(" ")}></div>
    );
  }
});

module.exports = Key;
