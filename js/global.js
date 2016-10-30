import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
var todoInput = document.getElementById('todoInput').addEventListener('keypress', handleEnterKey)
var todoBtn = document.getElementById('todoBtn').addEventListener('click', addTodoItem)
//^^grabbing my HTML elements from my input field and button, and listening in for either one (click or enter button). If the button or enter is activated I have added functions that will occur


var todos = []
//^^Global variable for my array that I will push my input into

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        addTodoItem()
    }
}
//^^As soon as the enter key is pressed I will run my addTodoItem function


function addTodoItem() {
    var todoItemValue = todoInput.value
//created new var scoped to this function. takes the value of global variable todoInput's value
    todoInput.value = ''
// wrapping any new input with '' ;; gift wrapping for my global array todos
    todos.push({
        description: todoItemValue,
    })
// pushing the inputvalue into todos array
    console.log(todos)
    renderView(todos)
//renderView is the React function that should display my array (or any component that is part of this array)
    var todos = []
}

var renderView = (data) => {
    ReactDOM.render(
        <Todos todos={data} />
        //document.getElementById('todos')
    )
}

//console.log(renderView)
//renderView(todos)


//function addTodoItem() {
    // var todoItemValue = document.getElementById('todoList').value
    // todos.push(todoItemValue)
    // document.getElementById('todoList').value = ''
    // renderView(todos)
//}
