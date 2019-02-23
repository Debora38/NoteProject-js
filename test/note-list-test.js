"use strict";

(function(exports) {

  function TestCreate() {
    var notelist = new NoteList();
    notelist.create("one note");
    assert.isTrue(notelist.all[0].text === "one note")
    console.log("TestCreate is passing")
  };
  TestCreate();

})(this);
