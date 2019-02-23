"use strict";

(function(exports){
  function TestPrintTwentyChar() {
    var noteListView = new NoteListView();
    noteListView.notelist.all.push(new Note("Favourite food: pesto"))
    noteListView.notelist.all.push(new Note("Favourite drink: seltzer"))
    assert.isTrue(noteListView.printTwentyChar() === "<ul><div><li><a href='#notes/0'>Favourite food: pest</a></li></div><div><li><a href='#notes/1'>Favourite drink: sel</a></li></div></ul>")
    console.log("TestPrintTwentyChar is passing")
  }

  TestPrintTwentyChar();

  function TestPrintWithoutTitle() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.printTwentyChar() === "<ul></ul>")
    console.log("TestPrintWithoutTitle is passing")
  }

  TestPrintWithoutTitle();

})(this);
