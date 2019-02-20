"use strict";

// function Greeting(newgreet){
//   document.getElementById('app').innerHTML = newgreet
// }

(function(exports){
  function NoteController(){
    this.notelistview = new NoteListView();
    this.notelistview.notelist.create('Favourite drink: seltzer')
  }

  exports.NoteController = NoteController
})(this);
