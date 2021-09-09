import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios'

import Tasks from './components/Tasks';
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDatails from "./components/TaskDatails";


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

  useEffect(()=> { 
    const fatchTasks = async () => {
    const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'
    );

    setTasks(data);
  };
  fatchTasks();
  },[]);


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
  <Router>
    <div className="container">
    <Header />
    <Route path="/" exact render={() => (
      <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>  
    </>
    )}/>
    <Route path="/:taskTitle" exact component={TaskDatails} />
      </div>
      </Router>
  );
};

export default App;