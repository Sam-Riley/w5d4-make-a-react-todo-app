import React, { Component } from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const todoItems = props.todos.map((todo, i) =>{
        return <TodoItem todo={todo} key={i} />
    })
    return (
      <div>
         {todoItems}
      </div>
   )
}

export default Todos
