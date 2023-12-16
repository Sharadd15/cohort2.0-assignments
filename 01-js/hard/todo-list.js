/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this._todos = [];
  }
  add(todo)
  {
    this._todos.push(todo);
  }

  remove(indexOfTodo)
  {
    this._todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo)
  {
    if(index >= this._todos.length)
      return;
    this._todos[index] = updatedTodo;
  }

  getAll()
  {
    return this._todos;
  }

  get(indexOfTodo)
  {
    if(indexOfTodo >= this._todos.length)
      return null;
    return this._todos[indexOfTodo];
  }

  clear()
  {
    this._todos = [];
  }
}

module.exports = Todo;
