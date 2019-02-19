"use strict";

(function(exports){
  function TestPrintTitle() {
    var noteListView = new NoteListView();
    noteListView.notelist.note_list.push(new Note("Favourite food: pesto"))
    noteListView.notelist.note_list.push(new Note("Favourite drink: seltzer"))
    assert.isTrue(noteListView.printTitles() === "<li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li>")
    console.log("TestPrintTitle is passing")
  }

  TestPrintTitle();
})(this);
