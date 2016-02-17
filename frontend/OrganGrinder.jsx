var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/Dispatcher');
var Note = require('./util/Note');
var KeyListener = require('./util/KeyListener');
var KeyStore = require('./stores/KeyStore');
var Key = require('./components/Key');
var TONES = require('./constants/Tones');
new KeyListener();

window.Dispatcher = Dispatcher;
window.KeyStore = KeyStore;
window.Note = Note;

var Organ = React.createClass({

  render: function(){
    var keyNames = Object.keys(TONES);

    var keyComponents = keyNames.map(function (keyName, index) {
      return <li key={index}><Key noteName={keyName} /></li>;
    });
    return (
      <ul>{keyComponents}</ul>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Organ />, root);
});
