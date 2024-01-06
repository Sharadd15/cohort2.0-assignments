import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class ToDo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
let globalId = 0;

function App() {
  const [todoList, setTodoList] = useState([]);
  let rednerTodo = (todo) =>
  {
    return (
      <div id={todo.id} key = {todo.id}>
        <p>title {todo.title}</p>
        <p>description {todo.description}</p>
        <form>
          <input type='text' className='input' placeholder='updatedescription'></input>
          <button type='button' onClick={() => updateTodo(todo.id)}>Update Todo</button>
        </form>
        <button type='button' onClick={() => removeTodo(todo.id)}>Remove Todo</button>
      </div>
    );
  };

  let addTodo = () =>
  {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    setTodoList( (todoList) => {
      let todo = new ToDo(globalId++, title, description); 
     return [...todoList, todo];
    } );
  };

  let updateTodo = (id) =>
  {
    let children = document.getElementById(id).children;
    let newDes = children[2].getElementsByClassName('input')[0].value;
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) {
          // Create a new object with the updated description
          return { ...todo, description: newDes };
        }
        return todo; // Return the unchanged todo for other elements
      })});
  };

  let removeTodo = (id) => {
    setTodoList(todoList => {
      return todoList.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
    <div>
      <form>
        <input id ='title' type='text' placeholder='Todo title'></input> <br /><br />
        <input id='description' type='text' placeholder='Todo description'></input> <br /><br />
        <button type='button' onClick={addTodo}>Add Todo</button> <br /><br />
      </form>
    </div>
    <div>
      {todoList.map(todo => rednerTodo(todo))}
    </div>
    </>
  )
}

export default App
