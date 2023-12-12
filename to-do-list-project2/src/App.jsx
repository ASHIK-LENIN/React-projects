import React, { useState } from 'react';
import './App.css';
import icon from './icon.png';

function App() {
  const [todo, setTodo] = useState([]);
  const [addTask, setAddTask] = useState('');

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addTask.length !== 0) {
      setTodo([...todo, addTask]);
      setAddTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodoList = [...todo];
    newTodoList.splice(index, 1);
    setTodo(newTodoList);
  };

  // const isChecked = (item) => {
  //   return todo.includes(item) ? 'checked-item' : 'not-checked-item';
  // };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List <img src={icon} alt="icon" /></h2>

        <div className="row">
          <input
            type="text"
            placeholder="Add your Task"
            id="text"
            value={addTask}
            onChange={handleChange}
          />

          <button id="button-add" onClick={handleSubmit}>
            Add
          </button>
        </div>

        <div>
          <ul id="list-container">
            {todo.map((item, index) => {
              return (
                <div>
                <li key={index}>
                  <input type="checkbox" id="checkbox" value='checkbox' />
                  <label for="cbox" className='label'>{item}</label>
                  <i
                    class="fa fa-trash-alt"
                    aria-hidden="true"
                    onClick={() => handleDelete(index)}
                  ></i>
                </li>
                </div>
              );
            })}
          </ul>
        </div> 
      </div>
    </div>
  );
}

export default App;
