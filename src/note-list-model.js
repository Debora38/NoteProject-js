"use strict";

(function(exports) {
  function NoteList() {
    this.all = []
  };

NoteList.prototype.printList = function() {
  var list = ""
  for (var i in this.all) {
    list += this.all[i] + " ";
  }
  return list.trim()
};

NoteList.prototype.create = function(text) {
  var note = new Note(text)
  this.all.push(note)
};

  exports.NoteList = NoteList;
})(this);
