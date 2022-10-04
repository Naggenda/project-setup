import React, { useState } from 'react';

function Home() {
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
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={event=> setNewTodo(event.target.value)} />
      <button onClick={addTodos}>Add Todo</button>
      

      {
        todos.map((toDo, id)=>{
          return (
          <div>
             <span>{toDo}</span>
             <button id= {id} onClick={() => deleteTodos(id)}>Delete</button>
          </div>
          )
        })
      }
    </div>
  )
};


export default Home;