import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
var todoInput = document.getElementById('todoInput').addEventListener('keypress', handleEnterKey)
var todoBtn = document.getElementById('todoBtn').addEventListener('click', addTodoItem)
//^^grabbing my HTML elements from my input field and button, and listening in for either one (click or enter button). If the button or enter is activated I have added functions that will occur


var todos = []
//todos = document.getElementById('todos')
//^^Global variable for my array that I will push my input into

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        addTodoItem()
    }
}
//^^As soon as the enter key is pressed I will run my addTodoItem function

function addTodoItem() {
    var todoItemValue = document.getElementById('todoList').value
    todos.push(todoItemValue)
    document.getElementById('todoList').value = ''
    renderView(todos)

    // var todoItemValue = todoInput.value
    // todoInput.value = ''
    // todos.push({
    //     description: todoItemValue,
    // })
    // console.log(todos)
    // renderView(todos)
    //var todos = []
}


var renderView = (data) => {
    ReactDOM.render(
        <Todos todos={data} />
        //document.getElementById('todos')
    )
}

//console.log(renderView)
//renderView(todos)
