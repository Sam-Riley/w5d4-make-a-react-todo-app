import React, { Component } from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const todoItems = props.todos.map((todo, i) =>{
        return <TodoItem todos={todos.description} key={i} />
    })
    return (
      <div>
         {todoItems}
      </div>
   )
}

export default Todos
