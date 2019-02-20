"use strict";

(function(exports){
  function NoteController(){
    this.notelistview = new NoteListView();
    this.notelistview.notelist.create('Favourite drink: seltzer')
  }

  NoteController.prototype.changeNote = function(){
    document.getElementById('app').innerHTML = this.notelistview.printTitles()
  }

  exports.NoteController = NoteController
})(this);

var notecontroller = new NoteController();
notecontroller.changeNote();
