"use strict";

(function(exports){
  function NoteListView(){
    this.notelist = new NoteList();
  };

  NoteListView.prototype.printTitles = function() {
    var titles = "<ul>"
    for (var i in this.notelist.all) {
      titles += "<div><li>" + this.notelist.all[i].text + "</li></div>";
    }
    return titles + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
