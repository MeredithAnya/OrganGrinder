var AppDispatcher = require("../dispatcher/Dispatcher");
var NOTE_PRESSED = "NOTE_PRESSED";
var NOTE_RELEASED = "NOTE_RELEASED";

var KeyActions = {
  keyPressed: function(noteName){
    AppDispatcher.dispatch({
      actionType: NOTE_PRESSED,
      noteName: noteName
    });
  },
  keyReleased: function(noteName){
    AppDispatcher.dispatch({
      actionType: NOTE_RELEASED,
      noteName: noteName
    });
  },
  setAllKeys: function(notes){
    AppDispatcher.dispatch({
      actionType: "SET_ALL_KEYS",
      notes: notes
    });
  }
};

module.exports = KeyActions;
