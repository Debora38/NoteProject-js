"use strict";

(function(exports){
  function NoteController(){
    this.view = new NoteListView();
    
  }

  NoteController.prototype.changeNote = function(id){
    return this.HTML(id).innerHTML = this.view.printTwentyChar()
  }

  NoteController.prototype.HTML = function(id){
    return document.getElementById(id)
  }

  exports.NoteController = NoteController
})(this);
