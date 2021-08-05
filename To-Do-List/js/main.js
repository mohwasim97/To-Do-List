let array = []; //empty array
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let deleteToDobutton = document.getElementById('deleteToDo');

addToDoButton.addEventListener('click', function(){
var paragraph = document.createElement('p');
paragraph.innerText = inputField.value;
array.push(paragraph);
console.log(array);

toDoContainer.appendChild(array[array.length-1]);

})

deleteToDobutton.addEventListener('click', function(){
    
    toDoContainer.removeChild(toDoContainer.lastChild);

})
