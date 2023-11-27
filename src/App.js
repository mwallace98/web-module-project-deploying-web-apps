import React,{useState} from 'react';
import './App.css';

import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm'

function App() {

  const [todo,setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (evt) => {
    setTodo(evt.target.value)
  }

  const handleFormSubmit  = (evt) => {
    evt.preventDefault()
    if(todo.trim() !== ''){
    setTodoList([...todoList,todo])
    setTodo('')
    }
  }

  const handleDelete = (index) => {
    const updatedList = todoList.filter((todo,idx) => idx !== index )
    setTodoList(updatedList)
}
  
  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Add New To-Do</h2>
        <TodoForm
          todo={todo}
          handleChange={handleChange}
          handleFormSubmit={handleFormSubmit}
        />
        <TodoList 
          todoList={todoList} 
          setTodoList={setTodoList}
          handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
