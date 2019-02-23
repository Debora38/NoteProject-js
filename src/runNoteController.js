var notecontroller = new NoteController();
notecontroller.view.list.create('Favourite drink: seltzer')
notecontroller.view.list.create('Another note')
notecontroller.enterList('app');

notecontroller.makeUrlShowSingleNote();
