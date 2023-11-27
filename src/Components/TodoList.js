
import React from "react";

const TodoList = (props) => {
    const {todoList,handleDelete } = props
  
    const todos = Array.isArray(todoList) ? todoList : [];
    return (
        <div>
            <h2>To-Do List:</h2>
            <ul>
                {todos.map((todo,index) => (
                    <>
                    <li key={index} className="todo-item">
                        
                        <label htmlFor={`priority-${index}`}>
                        {todo}
                        </label>
                        <select placeholder="Priority Level" id={`priority-${index}`} name={`priority-${index}`}>
                            <option value='Select Priority'>Select Priority</option>
                            <option value='High'>High</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>
                        </select>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        
                    </li></>
                ))}
            </ul>
        </div>
    )
}

export default TodoList