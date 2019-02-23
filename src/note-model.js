"use strict";

(function(exports) {
  var id = 0

  function Note(text) {
    this.text = text;
    id++
    this.id = id
  };

  Note.prototype.title = function() {
    return this.text.slice(0, 20)
  }


  exports.Note = Note;
})(this);
