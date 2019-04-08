"use strict";

(function(exports){
  function NoteController(list, view, singleView){
    this.list = list;
    this.view = new NoteListView(list);
    this.singleNoteView = singleView;
  }

  NoteController.prototype.enterList = function(id){
    return this.HTML(id).innerHTML = this.view.printTwentyChar()
  }

  NoteController.prototype.HTML = function(id){
    return document.getElementById(id)
  }

  NoteController.prototype.showSingleNote = function () {
    var noteId = window.location.hash.split('#notes/')[1]
    var note = this.list.findById(noteId)
    var singleview = new this.singleNoteView(note)
    document.getElementById('app').innerHTML = singleview.printSingleNoteHTML()
  }

  exports.NoteController = NoteController

})(this);
