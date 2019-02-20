"use strict";

(function(exports){
  function TestNoteController(){
    var noteController = new NoteController();
    assert.isTrue(noteController !== 'undefined')
    console.log("TestNoteController is passing")
  }

  TestNoteController();

  function TestHTMLlist(){
    var noteController = new NoteController();
    assert.isTrue(noteController.notelistview.printTitles() === "<ul><div><li>Favourite drink: seltzer</li></div></ul>")
    console.log("TestHTMLlist is passing")
  }

  TestHTMLlist();

})(this);
