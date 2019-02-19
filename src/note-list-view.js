"use strict";

(function(exports){
  function NoteListView(){
    this.notelist = new NoteList();
  };

  NoteListView.prototype.printTitles = function() {
    var titles = ""
    for (var i in this.notelist.note_list) {
      titles += "<li><div>" + this.notelist.note_list[i].text + "</div></li>";
    }
    return titles
  }

exports.NoteListView = NoteListView;
})(this);
