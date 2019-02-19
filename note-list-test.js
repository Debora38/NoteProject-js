(function(exports) {
  function TestPrintList() {
    var notelist = new NoteList();
    notelist.note_list.push("one note");
    assert.isTrue(notelist.printList() === "one note")
  };
  TestPrintList();

  function TestCreate() {
    var notelist = new NoteList();
    notelist.create("one note");
    assert.isTrue(notelist.note_list.includes("one note"))
  }
  TestCreate();
})(this);




//Has a method that creates and stores a new single note model.
//This function takes as an argument a string that will be the
//value of the text property of the note e.g.
//"Favourite drink: seltzer".
