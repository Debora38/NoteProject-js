(function(exports) {
  function testNoteText() {
    var note = new Note();

    assert.isTrue(note.text === "My favourite language is JavaScript")
  };
  testNoteText();

  function print() {
    var note = new Note();

    if (note.print() !== "My favourite language is JavaScript") {
      throw new Error("text of function print does not match");
    }
  };
  print();

})(this);
