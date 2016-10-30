import React, { Component } from 'react'


const TodoItems = (props) => (
    <div className="todo">
        {props.todos.description}
    </div>
)
export default TodoItems
