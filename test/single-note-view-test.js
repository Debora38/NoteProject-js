"use strict";

(function(exports){
  function TestSingleNoteView(){
    var singlenoteview = new singleNoteView();
    assert.isTrue(singlenoteview instanceof singleNoteView)
  }

  TestSingleNoteView();

  function TestPrintSingleNoteHTML() {
    var singlenoteview = new singleNoteView();
    singlenoteview.note.text = 'Favourite drink: seltzer'
    assert.isTrue(singlenoteview.printSingleNoteHTML() === '<div>Favourite drink: seltzer</div>')
    console.log('TestPrintSingleNoteHTML is passing')
  }

  TestPrintSingleNoteHTML();
})(this);
