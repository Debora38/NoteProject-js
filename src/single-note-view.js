'use strict';

(function(exports){
  function singleNoteView(){
    this.note = new Note();
  }

  singleNoteView.prototype.printSingleNoteHTML = function(){
    return "<div>" + this.note.text + "</div>"
  }

  exports.singleNoteView = singleNoteView
})(this);
