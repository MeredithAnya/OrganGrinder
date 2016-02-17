var KeyActions = require('../actions/KeyActions');

var KEY_MAP = {
  81: 'C',
  50: 'CSharp',
  87: 'D',
  51: 'DSharp',
  69: 'E',
  82: 'F',
  53: 'FSharp',
  84: 'G',
  54: 'GSharp',
  89: 'A',
  55: 'ASharp',
  85: 'B',
};

function KeyListener() {
  register();
}

function register() {
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);
}

function handleKeyDown(event) {
  var noteName = KEY_MAP[event.keyCode];
  if (noteName) {
    KeyActions.keyPressed(noteName);
  }
}

function handleKeyUp(event) {
  var noteName = KEY_MAP[event.keyCode];
  if (noteName){
    KeyActions.keyReleased(noteName);
  }
}

module.exports = KeyListener;
