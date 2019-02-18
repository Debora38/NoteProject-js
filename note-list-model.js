(function(exports) {
  function NoteList() {
    this.note_list = []
  };

NoteList.prototype.printList = function() {
  for (var i in this.note_list) {
    return this.note_list[i];
  }
};


  exports.NoteList = NoteList;
})(this);
