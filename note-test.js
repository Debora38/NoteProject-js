(function(exports) {
  function testNoteText() {
    var note = new Note();

    assert.isTrue(note.text === "My favourite language is JavaScript")
  };
  testNoteText();

  function print() {
    var note = new Note();

    assert.isTrue(note.print() === "My favourite language is JavaScript")
  };
  print();

})(this);
