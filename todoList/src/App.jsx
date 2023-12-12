import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import icon from './icon.png'
import image from './alessandro-erbetta-mpWPcRT9D1E-unsplash.jpg'

function App() {

  
  const [todo, setTodo] = useState(()=>
    { const storedCount = JSON.parse(localStorage.getItem('Task'));
    return storedCount ? (storedCount) :[];
  });
  
useEffect(() =>{
  localStorage.setItem('Task',JSON.stringify(todo));

},[todo]);

const [add, setAdd] = useState('');


  const handleChange = (e) => {
    setAdd(e.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (add.length !== 0) {
      setTodo([...todo, add]);
      setAdd('');
    }
  };

  const deleteTask = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div   className="app">
      <div className="container">
        <div className="mainHeading">
          <h2>To-Do List  <img src={icon} alt="icon" className='icon' /></h2>
        </div>
        <div className="subHeading">
          <br />
        </div>

        <div className="input">
          <input type="text" placeholder="🖊️ Add item..." value={add} onChange={handleChange} />
          <i className="fas fa-plus" onClick={addTask}></i>
        </div>
      </div>
      <div className="todos">

        {todo.map((item, index) => (


          <div className="todo" key={index}>
            <div className="left">
              <input type="checkbox" name="" id="cbox" className='strikethrough' />
              <label for='cbox'> {item}</label>


            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTask(index)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
