(function(exports) {
  function TestPrintList() {
    var notelist = new NoteList();
    notelist.note_list.push("one note");
    assert.isTrue(notelist.printList() === "one note")
  };
  TestPrintList();

})(this);
