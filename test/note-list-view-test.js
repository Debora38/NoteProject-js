"use strict";

(function(exports){
  function TestPrintTwentyChar() {
    var notelist = new NoteList();
    var noteListView = new NoteListView(notelist);
    noteListView.list.all.push(new Note("Favourite food: pesto"))
    noteListView.list.all.push(new Note("Favourite drink: seltzer"))
    assert.isTrue(noteListView.printTwentyChar() === "<ul><div><li><a href='#notes/5'>Favourite food: pest</a></li></div><div><li><a href='#notes/6'>Favourite drink: sel</a></li></div></ul>")
    console.log("TestPrintTwentyChar is passing")
  }

  TestPrintTwentyChar();

  function TestPrintWithoutTitle() {
    var notelist = new NoteList();
    var noteListView = new NoteListView(notelist);
    assert.isTrue(noteListView.printTwentyChar() === "<ul></ul>")
    console.log("TestPrintWithoutTitle is passing")
  }

  TestPrintWithoutTitle();

})(this);
