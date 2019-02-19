"use strict";

(function(exports) {
  function NoteList() {
    this.note_list = []
  };

NoteList.prototype.printList = function() {
  var list = ""
  for (var i in this.note_list) {
    list += this.note_list[i] + " ";
  }
  return list.trim()
};

NoteList.prototype.create = function(text) {
  var note = new Note(text)
  this.note_list.push(note)
};

  exports.NoteList = NoteList;
})(this);
