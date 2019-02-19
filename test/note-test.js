"use strict";

(function(exports) {
  function testNoteText() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.text === "My favourite language is JavaScript")
    console.log("testNoteText is passing")
  };
  testNoteText();

  function TestPrint() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.print() === "My favourite language is JavaScript")
    console.log("TestPrint is passing")
  };
  TestPrint();

})(this);
