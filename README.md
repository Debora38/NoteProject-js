# Notes Project

### User stories

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```
```
As a programmer
I can create a new note
So I can record something I need to remember
```
```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```
### Instructions:

#### TDD a note object that fulfills the specification below.
- Code is in a file called note-model.js.
- Code is wrapped in the module pattern.
- Uses the constructor and prototype pattern to define a note model object that can be instantiated.
- Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
- Stores the text in a text property on the note.
- Has a method that will return the note text.

#### TDD a note list object that fulfills the specification below.
- Code is in a file called note-list-model.js.
- Code is wrapped in the module pattern.
- Uses the constructor and prototype pattern to define a note list model object that can be instantiated.
- Stores an array of note models.
- Has a method that will return all the note models stored in the array.
- Has a method that creates and stores a new single note model. This function takes as an argument a string that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

#### TDD the note list view object that fulfils the specification below.
- Code in a file called note-list-view.js.
- Code is wrapped in the module pattern.
- Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
- Takes a note list model upon instantiation.
- Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
- Handles a note list model that has no notes, one note or several notes.

#### Create a minimal HTML page
- Create an index.html file containing the minimal HTML structure.
- Add a div that has an id attribute set to app and contains the text hello.
- Install 💊 node.
- Install http-server from 💊 npm.
- Run http-server to serve your index.html.
- Go to http://localhost:8080/ in a browser to view your index.html page. It should say hello.

#### Insert content into the DOM.
- Create a note-controller.js file and use a script tag to load it in your index.html file.
- Add code that gets hold of the app div element in your index.html page. console.log the element to be sure you've got it.
- Add code that can change the app greeting from hello to howdy.
- Visit http://localhost:8080 and check you can see howdy.

#### Insert content into the DOM.
- Check that you can visit http://localhost:8080 in your browser and see Favourite drink: seltzer.

#### TDD a single note view object (a view for showing a single note on a page)
- Code is in a file called single-note-view.js.
- Code is wrapped in the module pattern.
- Code uses the constructor and prototype pattern to define a single note view object that can be instantiated.
- The single note view constructor takes a note model as a parameter.
- The single note view has a method that, when called, returns a string of HTML that represents the note model. For example: <div>Favourite drink: seltzer</div>.

#### Manipulate JavaScript strings.
- Change the note list view you created way back in challenge 3. TDD updating the code to only show the first 20 characters of each note in the list.

#### Support multiple content "pages" in a frontend, single page app & use the hashchange event to load page content when the browser URL changes.
##### 1. Note model unique id
- TDD giving each note model object a unique id. The first note created would have an id of 0. The second note created would have an id of 1. etc.
##### 2. Link each note to a page that displays the full note
- Read 💊 frontend, single page app.
- Use TDD to update the note list view so that each note is linked to an appropriate URL for displaying that individual note e.g. http://localhost:8080#notes/1.
- Go to http://localhost:8080 in your browser. You should be able to click on a note and be redirected to the URL for that note. There should be no page refresh. The page content shouldn't change. (And you won't see the note, yet.)
##### 3. Load the content for the single note page
- Using TDD, update your note-controller.js to load content for the single note page. The note controller code should listen for hashchange events. When one happens, if the new browser URL is for a single note page, it should change the content of the app element to be the HTML for that note.
- Go to http://localhost:8080 in your browser. You should be able to click on a note and see the full text of that note. There should be no page refresh.

### Approach

<img src="https://github.com/Debora38/NoteProject-js/blob/master/docs/images/NotesProject_model.png?raw=true">

After experimenting on writing a testing framework on my own in this project: <a href="https://github.com/Debora38/NotesChallenge_TestingFramework">NotesChallenge_TestingFramework</a>, I went back to the above instructions and created the program as specified and as showed in my model.<br>
Creating a program without existing testing framework, such as Jasmine, was interesting and made me realise how flexible and customizable it could be to create your own testing framework.

### How to install
```
- clone locally
- run 'http-server'
- viit TestRunner.html in your browser
- open the Developer tools (cmd + option + I) to see the tests pass
- visit 'http://localhost:8080' in your browser
```
