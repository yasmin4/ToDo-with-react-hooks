import React, { useState, useEffect } from 'react';
import './style.css';
import Formdata from './Formdata';
import Showtable from './Showtable';

export default function App() {
  const [inputBox, setInputBox] = useState('');
  const [toDoList, setToDolist] = useState([]);
  const [indexRow, setIndexRow] = useState('');

  const handleOnchange = event => {
    setInputBox(event.target.value);
  };

  useEffect(() => {
    // Get all the data from localStorage
    const allTasks = localStorage.getItem('tasks');
    setToDolist(allTasks ? JSON.parse(allTasks) : []);
  }, []);

  const handleOnSubmit = event => {
    event.preventDefault();
    if (typeof indexRow === 'number') {
      if (inputBox) {
        const allTasks = toDoList;
        allTasks[indexRow] = inputBox;
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        setToDolist(allTasks);
        setInputBox('');
        setIndexRow('');
      } else {
        alert('Please enter new task description');
      }
    } else {
      if (inputBox) {
        console.log('inEditelse');
        const newTasksList = [...toDoList, inputBox];
        // Update todo list state
        setToDolist(newTasksList);
        // localStorage Update
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
        setInputBox('');
      } else {
        alert('Please enter new task description');
      }
    }
  };
  const handleRemove = index => {
    console.log('i am in handle remove');
    console.log(index);
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    allTasks.splice(index, 1); // Good one!
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    setToDolist(allTasks);
    setIsSubmit(true);
  };
  const startEdit = index => {
    setInputBox(toDoList[index]);
    setIndexRow(index);
  };

  return (
    <div>
      <h3>My To Do List</h3>
      <form id="doListForm" name="doListForm" onSubmit={handleOnSubmit}>
        <Formdata
          type="text"
          name="inputData"
          value={inputBox}
          onChangeHandler={handleOnchange}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        <Showtable
          listDescription={toDoList}
          editRow={startEdit}
          deleteRow={handleRemove}
        />
      </div>
    </div>
  );
}
