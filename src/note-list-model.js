"use strict";

(function(exports) {
  function NoteList() {
    this.all = []
  };

NoteList.prototype.create = function(text) {
  var note = new Note(text)
  this.all.push(note)
};

  exports.NoteList = NoteList;
})(this);
