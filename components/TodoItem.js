import React, { Component } from 'react'


const TodoItems = (props) => (
    <div className="todo">
        {props.todo.description}
    </div>
)
export default TodoItems
