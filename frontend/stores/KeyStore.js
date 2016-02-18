var AppDispatcher = require("../dispatcher/Dispatcher");
var Store = require("flux/utils").Store;
var KeyActions = require('../actions/KeyActions');
var _keys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "NOTE_PRESSED":
     if (_keys.indexOf(payload.noteName) === -1){
       _keys.push(payload.noteName);
       KeyStore.__emitChange();
     }
      break;
    case "NOTE_RELEASED":
      var index = _keys.indexOf(payload.noteName);
      if (index !== -1) {
        _keys.splice(index, 1);
        KeyStore.__emitChange();
      }
      break;
    case "SET_ALL_KEYS":
      _keys = payload.notes;
      KeyStore.__emitChange();
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

module.exports = KeyStore;
