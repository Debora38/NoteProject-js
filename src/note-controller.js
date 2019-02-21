"use strict";

(function(exports){
  function NoteController(){
    this.notelistview = new NoteListView();
    this.notelistview.notelist.create('Favourite drink: seltzer')
  }

  NoteController.prototype.changeNote = function(){
    return this.HTML().innerHTML = this.notelistview.printTwentyChar()
  }

  NoteController.prototype.HTML = function(){
    return document.getElementById('app')
  }

  exports.NoteController = NoteController
})(this);
