"use strict";

(function(exports){
  function TestSingleNoteView(){
    var singlenoteview = new singleNoteView();
    assert.isTrue(singlenoteview instanceof singleNoteView)
  }

  TestSingleNoteView();

  function TestPrintSingleNoteHTML() {
    var note = new Note("Favourite drink: seltzer")
    var singlenoteview = new singleNoteView(note);
    assert.isTrue(singlenoteview.printSingleNoteHTML() === '<div>Favourite drink: seltzer</div>')
    console.log('TestPrintSingleNoteHTML is passing')
  }

  TestPrintSingleNoteHTML();
})(this);
