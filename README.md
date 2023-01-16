<h1>To-Do List</h1>
<hr/>
<p>A simple to-do list application built with React.</p>
<h2>Features</h2>
<ul>
  <li>Add to-do items by entering them into an input field and clicking "Add"</li>
  <li>View a list of all added to-do items</li>
  <li>Delete individual to-do items by clicking the "Delete" button next to them</li>
</ul>
<h2>File Structure</h2>
<ul>
  <li>todoList.js - contains the main code for the ToDoList component</li>
  <li>todoList.css - contains styling for the application</li>
</ul>
<h2>How to Use</h2>
<ol>
  <li>Enter a to-do item into the input field</li>
  <li>Click the "Add" button</li>
  <li>To delete a to-do item, click the "Delete" button next to it</li>
</ol>
<h2>Code Explanation</h2>
<p>The ToDoList component uses two state variables, "todo" and "inputStr". "todo" is an array that stores all the added to-do items, while "inputStr" is an object that stores the current input value and placeholder.</p>
<p>The component has several functions:</p>
<ul>
  <li>handleChange - updates the "inputStr" state variable with the current input value</li>
  <li>handleClick - adds the current input value to the "todo" array and clears the input field</li>
  <li>handleDelete - deletes a to-do item from the "todo" array by filtering out the item at the specified index</li>
</ul>
<p>The component also uses several JSX elements to render the UI:</p>
<ul>
  <li>An input field that displays the current input value and calls the handleChange function when the value changes</li>
  <li>A button that calls the handleClick function when clicked</li>
  <li>A list of to-do items rendered using the map function, each with its own delete button that calls the handleDelete function when clicked</li>
</ul>
<p>The component is exported as default so that it can be used in other files.</p>

<img height="500px" src="my-app\public\ToDoListExample.png"></img>
