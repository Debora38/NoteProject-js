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
    noteController.view.notelist.create("Favourite drink: seltzer")
    assert.isTrue(noteController.enterList() === "<ul><div id='0'><li><a href='#notes/0'>Favourite drink: sel</a></li></div></ul>")
    console.log("TestHTMLlist is passing")
  }

  TestHTMLlist();


  function TestPrintSingleNote(){
    var note = new Note("test note");
    var noteController = new NoteController();
    assert.isTrue(noteController.printSingleView(note) === "<div>test note</div>")
    console.log("TestPrintSingleNote is passing")
  }

  TestPrintSingleNote();

})(this);
