"use strict";

(function(exports){
  function NoteListView(){
    this.notelist = new NoteList();
  };

  NoteListView.prototype.printTitles = function() {
    var titles = "<ul>"
    for (var i in this.notelist.note_list) {
      titles += "<div><li>" + this.notelist.note_list[i].text + "</li></div>";
    }
    return titles + "</ul>"
  }

exports.NoteListView = NoteListView;
})(this);
