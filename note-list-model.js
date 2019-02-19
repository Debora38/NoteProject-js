(function(exports) {
  function NoteList() {
    this.note_list = []
  };

NoteList.prototype.printList = function() {
  for (var i in this.note_list) {
    return this.note_list[i];
  }
};


NoteList.prototype.create = function(note) {
  this.note_list.push(note)
};

  exports.NoteList = NoteList;
})(this);
