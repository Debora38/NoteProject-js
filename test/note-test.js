"use strict";

(function(exports) {
  function testNoteText() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.text === "My favourite language is JavaScript")
    console.log("testNoteText is passing")
  };
  testNoteText();

  function TestTitle() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.title() === "My favourite languag")
    console.log("TestTitle is passing")
  };
  TestTitle();

})(this);
