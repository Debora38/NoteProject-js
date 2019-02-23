"use strict";

(function(exports){
  function NoteListView(){
    this.list = new NoteList();
  };

  NoteListView.prototype.printTwentyChar = function() {
    var titles = "<ul>"
    for (var i in this.list.all) {
      titles += "<div id='" + i + "'><li><a href='#notes/" + i + "'>" + this.list.all[i].text.slice(0, 20) + "</a></li></div>";
    }
    return titles + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
