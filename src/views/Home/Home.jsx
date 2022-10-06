import React, { useState } from 'react';

function Home() {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodos(){
    setTodos(prevArray => [...prevArray, newTodo]);
    setNewTodo("");
  };

  function deleteTodos(id){
    const todosCopy = [...todos]
    todosCopy.splice(id, 1)
    setTodos(todosCopy);
  };

  function editTodos(id){
    setIsEditing(true);
    setTodos({...newTodo});
  }

  return (
    <div className="card">
      <input type="text" value={newTodo} onChange={event=> setNewTodo(event.target.value)} />
      <button onClick={addTodos} className="btn btn-primary">Add Todo</button>
      

      {
        todos.map((toDo, id)=>{
          return (
          <div>
             <span>{toDo}</span>
             <button id = {id} onClick={() => editTodos(id) } className="btn btn-primary">Edit</button>
             <button id= {id} onClick={() => deleteTodos(id)} className="btn btn-danger">Delete</button>
          </div>
          )
        })
      }
    </div>
  )
};


export default Home;