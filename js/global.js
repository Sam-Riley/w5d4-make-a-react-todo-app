import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
var todoInput = document.getElementById('todoInput')
var todoBtn = document.getElementById('todoBtn')

todoInput.addEventListener('keypress', handleEnterKey)
todoBtn.addEventListener('click', addTodoItem)
var todos = []

function handleEnterKey(event){
    if(event.key === 'Enter') {
        addTodoItem()
    }
}

function addTodoItem() {
    var todoItemValue = todoInput.value

    todoInput.value = ''

    todos.unshift({
        description: todoItemValue,
        // date:
    })
    renderView(todos)

    // var todos = []
}



 function renderView(data) {
    ReactDom.render(
        <Todos data={data} />,
        document.getElementById('todoList')
    )
}

// renderView(todos)
