"use strict";

(function(exports) {
  function TestPrintList() {
    var notelist = new NoteList();
    notelist.note_list.push("one note");
    notelist.note_list.push("second note");
    assert.isTrue(notelist.printList() === "one note second note")
    console.log("TestPrintList is passing")
  };
  TestPrintList();

  function TestCreate() {
    var notelist = new NoteList();
    notelist.create("one note");
    assert.isTrue(notelist.note_list[0].text === "one note")
    console.log("TestCreate is passing")
  };
  TestCreate();

})(this);
