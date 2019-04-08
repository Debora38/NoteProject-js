"use strict";

(function(exports) {
  function NoteList() {
    this.all = []
  };

NoteList.prototype.create = function(text) {
  var note = new Note(text)
  this.all.push(note)
};

NoteList.prototype.findById = function(id) {
  return this.all.find(function(note){
    return note.id === id
  })
}

  exports.NoteList = NoteList;
})(this);
