import React, { Component } from 'react'


const TodoItems = (props) => (
    <div className="todoList">
        {props.todo}
    </div>
)
export default TodoItems
