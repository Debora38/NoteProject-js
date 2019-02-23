'use strict';

(function(exports){
  function singleNoteView(note){
    this.note = note
  }

  singleNoteView.prototype.printSingleNoteHTML = function(){
    return "<div>" + this.note.text + "</div>"
  }

  exports.singleNoteView = singleNoteView
})(this);
