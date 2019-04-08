"use strict";

(function(exports){
  function TestNoteController(){
    var noteController = new NoteController();
    assert.isTrue(noteController instanceof NoteController)
    console.log("TestNoteController is passing")
  }

  TestNoteController();

  function TestHTMLlist(){
    var list = new NoteList();
    var noteController = new NoteController(list);

    noteController.HTML = function(){
      var doc = document.createElement('app')
      doc.innerHTML = "<div id='app'>hello</div>"
      return doc
    }
    noteController.view.list.create("Favourite drink: seltzer")
    assert.isTrue(noteController.enterList() === "<ul><div><li><a href='#notes/7'>Favourite drink: sel</a></li></div></ul>")
    console.log("TestHTMLlist is passing")
  }

  TestHTMLlist();

  function TestShowSingleNote(){
    var list = new NoteList();
    var noteController = new NoteController(list);
    var singleView = new singleNoteView(note)
    // page.visit
    console.log(noteController.showSingleNote())
  }
  TestShowSingleNote()

})(this);
