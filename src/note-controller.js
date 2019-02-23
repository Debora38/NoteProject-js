"use strict";

(function(exports){
  function NoteController(){
    this.view = new NoteListView();
  }

  NoteController.prototype.enterList = function(id){
    return this.HTML(id).innerHTML = this.view.printTwentyChar()
  }

  NoteController.prototype.HTML = function(id){
    return document.getElementById(id)
  }

  NoteController.prototype.printSingleView = function (note){
    var singleview = new singleNoteView(note);
    return singleview.printSingleNoteHTML()
  }

  NoteController.prototype.locationHashChanged = function () {
    if (location.hash === '#notes') {
      return printSingleView(text)
    }
  }

  exports.NoteController = NoteController

})(this);
