
import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ state, toggleTodo }) => {
  return (
    // In this code I'm using the map method to get the todos array object in a list.
    state.map((todo) => {
      return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
    })
  );
};

