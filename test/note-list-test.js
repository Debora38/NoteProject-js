"use strict";

(function(exports) {

  function TestCreate() {
    var notelist = new NoteList();
    notelist.create("one note");
    assert.isTrue(notelist.all[0].text === "one note")
    console.log("TestCreate is passing")
  };
  TestCreate();

  function TestFindById() {
    var notelist = new NoteList();
    notelist.create("test note");
    assert.isTrue(notelist.findById(4).text === "test note")
    console.log("TestFindById is passing")
  }
  TestFindById()

})(this);
