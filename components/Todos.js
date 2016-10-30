import React, { Component } from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const todoList = props.data.map((input, i) =>{
        return <TodoItem data={input} key={i} />
    })
    return (
      <ul className="todoList">
         {todoList}
      </ul>
   )
}

export default Todos
