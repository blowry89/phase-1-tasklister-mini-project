document.addEventListener("DOMContentLoaded", () => {
// Grab create task form from index.html using .elementById() and create a variable.
// Add event listener named New Task to form. 
  const createTaskForm = document.getElementById('create-task-form')
// Arrow function method of writing event listener. createTaskForm.onsubmit = ( ) => addNewTask 

  createTaskForm.addEventListener( 'submit', addNewTask ) 
});
// Write a function to handle event listener. 
function addNewTask ( event ) {
// Prevent default aka page stop refreshing
  event.preventDefault()
//Add lists to form.
const ulTasks = document.getElementById( 'tasks' )
let taskForm = event.target

let inputValue = taskForm['new-task-description'].value 
//Conditional statement that requires a number of characters to be inputted into form in order to be saved to form.
if ( inputValue.length > 3 ) { 
  //Line 13 just inside of a conditional.
  const liTask = document.createElement( 'li' )
  ulTasks.appendChild ( liTask )
  liTask.textContent = inputValue
  //reset task form 
taskForm.reset()

//Adding delete button to li to remove tasks from list.
let deleteBtn = document.createElement( 'button' )
liTask.appendChild( deleteBtn )
deleteBtn.textContent = '❌' //to get emoji use cntrl+cmd+space

//Delete click event using arrow function.
// alternate way to write \/ ... deleteBtn.onclick = ( event ) => deleteTask( event ) 
deleteBtn.onclick = ( ) => liTask.remove()

} else {
  // Alert Error message when conditional isnt met.
  alert("Tasks needs more characters to be saved.")
}
//reset task form 
taskForm.reset()
} 
// Created function for delete button.
//function deleteTask( event ) {
// //event.target.parentElement.remove()
//li.remove() another way to write /\
//}

