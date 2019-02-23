"use strict";

(function(exports){
  function TestPrintTwentyChar() {
    var noteListView = new NoteListView();
    noteListView.notelist.all.push(new Note("Favourite food: pesto"))
    noteListView.notelist.all.push(new Note("Favourite drink: seltzer"))
    assert.isTrue(noteListView.printTwentyChar() === "<ul><div id='0'><li>Favourite food: pest</li></div><div id='1'><li>Favourite drink: sel</li></div></ul>")
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
