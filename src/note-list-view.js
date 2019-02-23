"use strict";

(function(exports){
  function NoteListView(list){
    this.list = list;
  };

  NoteListView.prototype.printTwentyChar = function() {
    var titles = "<ul>"
    for (var i in this.list.all) {
      titles += "<div><li><a href='#notes/" + this.list.all[i].id + "'>" + this.list.all[i].title() + "</a></li></div>";
    }
    return titles + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
