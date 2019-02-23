"use strict";

(function(exports){
  function TestNoteController(){
    var noteController = new NoteController();
    assert.isTrue(noteController instanceof NoteController)
    console.log("TestNoteController is passing")
  }

  TestNoteController();

  function TestHTMLlist(){
    var noteController = new NoteController();

    noteController.HTML = function(){
      var doc = document.createElement('app')
      doc.innerHTML = "<div id='app'>hello</div>"
      return doc
    }
    assert.isTrue(noteController.changeNote() === "<ul><div id='0'><li>Favourite drink: sel</li></div></ul>")
    console.log("TestHTMLlist is passing")
  }

  TestHTMLlist();

})(this);
