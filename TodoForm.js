import React from "react";

const NewTodo = (props) => {
    const {todo,handleChange,handleFormSubmit} = props
    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type='text' 
                placeholder='Enter New Todo' 
                onChange={handleChange} 
                value={todo}
            /> 
            <button>Add To-Do To List</button>
        </form>
    )
}

export default NewTodo