var list = new NoteList();
var notecontroller = new NoteController(list);
notecontroller.view.list.create('Favourite drink: seltzer')
notecontroller.view.list.create('Another note')
notecontroller.enterList('app');

notecontroller.showSingleNote();
