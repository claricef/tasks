import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Tasks from './components/Tasks';
import "./App.css";
import AddTask from "./components/AddTask";


const App = () => {
  const [tasks, setTasks]= useState([
    {
      id: '1',
      title: 'Estudar Programação',
      complete: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      complete: true,
    }
  ]); // dentro do state é o valor inicial, se for uma lista colocar entre []

  const handleTaskClick = (taskId) => { // loop em cada task buscando a task clicada entao muda o completed
    const newTasks = tasks.map( task => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }
  
  const handleTaskAddition = (taskTitle) => {
    const newTask = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];

    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId )

    setTasks(newTasks)
  }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>  
      </div>;

    </>
  );
};

export default App;