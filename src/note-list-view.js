"use strict";

(function(exports){
  function NoteListView(){
    this.notelist = new NoteList();
  };

  NoteListView.prototype.printTitles = function() {
    var titles = ""
    for (var i in this.notelist.note_list) {
      titles += "<div><li>" + this.notelist.note_list[i].text + "</li></div>";
    }
    return titles
  }

exports.NoteListView = NoteListView;
})(this);
