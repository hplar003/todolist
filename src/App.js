
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import TodosList from './components/TodosList';

import { useState } from 'react';
function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
     
    </div>
  );
}

export default App;
