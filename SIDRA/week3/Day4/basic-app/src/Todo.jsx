import React from 'react'
//    In this code I'm passing the todo and toggletodo as a prop
export const Todo = ({todo,toggleTodo}) => {

    const handleTodoClick=()=>{
        toggleTodo(todo.id)
    }
  return (
    <>
           {/* In input field I set the checkbox and its complete value either is true ir false.
           then In the next h1 tags I used template literal to show the code  */}
     <label>
        <input type='checkbox' checked={todo.complete}  onChange={handleTodoClick}/>
        {todo.values}
      </label>
      <h1>{`id is ${todo.id}`}</h1>
      <h1>{`your name is ${todo.name}`}</h1>
      {/* <h1>{`your dep is ${todo.dep}`}</h1>
      <h1>{`your field is ${todo.field}`}</h1> */}
     
      
    </>
   
  )
}
