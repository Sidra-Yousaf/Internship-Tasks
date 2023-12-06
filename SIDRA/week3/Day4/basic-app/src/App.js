import React, { useEffect, useRef, useState } from "react";
import { TodoList } from "./TodoList";
import { v4 } from "uuid";
const LOCAL_STORAGE_KEY = "todosApp.state";


const App = () => {
  // This is functional Component where I used usestate hook and set's the object of any array as a initial value 
  // of the state, then I pass it into the TodoList.jsx component as a prop and also pass it as a argument of a prop
  // function.

  // const[state,setState] = useState([{id:1, name:'sid', dep:'IT', field:'Development', complete:false ,values:'gained'}])
      
  //  In this code I'm using getitem method to get the data from the local storage if it has todos then show them otheriwse
  //   set them empty 
  const [state, setState] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTodos || [];
  });

  const [value, setValue] = useState();
  const UseRefHook = useRef();
          // This code is used to set the data into local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

   //  In this code I use the function which is called on addtodo button, the purpose is to pass the useref text When 
   //  user enter any value in input field then if its empty then the code should stopa and return the value then setstate 
   //  sets prevtodos as a initial value and then use the spread operator which is used to add the previoustodos that are 
   //  empty and then add the new object of id,the name which user will select and then complete value sets the false.
  const myHook = (e) => {
    const name = UseRefHook.current.value;
    if (name === "") return;
    setState((prevTodos) => {
      return [...prevTodos, { id: v4(), name: name, complete : false }];
    });
    console.log(name);
    setValue(name);
    UseRefHook.current.value = null;
  };
      
    //  This code is used for todos toggeling like if toggles will show then if user click to the mark it will show and 
    //  if its uncomplete the show thenewrodos variable.
  const toggleTodo = (id) => {
    const newTodos = [...state];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setState(newTodos);
  };
          //  This code is used to clear the Todos
  const handleClear=()=>{
    const newTodos= state.filter(todo=> !todo.complete)
    setState(newTodos)
  }

  return (
    <>
            {/* In this code I'm using jsx where calling a function on button onclick and button handleClear when user will 
            click to the handleclear then all the data  */}
      <TodoList state={state} toggleTodo={toggleTodo} />
      <input type="text" ref={UseRefHook} />
      <button onClick={myHook}>Add Todo</button>
      <button onClick={handleClear}>Clear Complete</button>
      <div>{value}</div>
      <div>{state.filter(todo=>!todo.complete).length}</div>
    </>
  );
};

export default App;
