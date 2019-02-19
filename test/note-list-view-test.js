"use strict";

(function(exports){
  function TestPrintTitle() {
    var noteListView = new NoteListView();
    noteListView.notelist.note_list.push(new Note("Favourite food: pesto"))
    noteListView.notelist.note_list.push(new Note("Favourite drink: seltzer"))
    assert.isTrue(noteListView.printTitles() === "<div><li>Favourite food: pesto</li></div><div><li>Favourite drink: seltzer</li></div>")
    console.log("TestPrintTitle is passing")
  }

  TestPrintTitle();

  function TestPrintWithoutTitle() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.printTitles() === "")
    console.log("TestPrintWithoutTitle is passing")
  }

  TestPrintWithoutTitle();
})(this);
