import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todo';



function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: 'buy some milk' },
    { id: 2, content: 'play FIFA' },
    { id: 3, content: 'walk with your dog' },
    { id: 4, content: 'drink water' },
    { id: 5, content: 'play mario kart' },

  ]);
  const deleteTodo = (id) => {
    const todoss = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(todoss)
  }
  const addTodo = (todo) => {

    const todoss = [...todos, { id: Math.random(), content: todo }];
    setTodos(todoss)

  }

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
