"use strict";

(function(exports){
  function NoteListView(){
    this.notelist = new NoteList();
  };

  NoteListView.prototype.printTwentyChar = function() {
    var titles = "<ul>"
    for (var i in this.notelist.all) {
      titles += "<div><li>" + this.notelist.all[i].text.slice(0, 20) + "</li></div>";
    }
    return titles + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
