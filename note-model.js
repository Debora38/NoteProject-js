(function(exports) {
  function Note() {
    this.text = "My favourite language is JavaScript";
  };

  Note.prototype.print = function() {
    return this.text
  }

  exports.Note = Note;
})(this);
