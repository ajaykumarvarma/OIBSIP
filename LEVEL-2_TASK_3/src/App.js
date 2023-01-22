import logo from './logo.svg';
import './App.css';
import  TasksContainer  from './TasksContainer';
import {Header} from './Header'
import { Footer } from './Footer';
import { useState } from "react";
import { Task } from './Task';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todofrom from './Todofrom';
import Swal from 'sweetalert2';

function App() {
  let [tasks, setTasks] = useState([
    { id: 1,title: "Sample Task 1", notes: "Sample Description 1", remainder: true },
    { id: 2, title: "Sample Task 2", notes: "Sample Description 2", remainder: false }
    
    
  ]);
  const onAddTask=(task)=>{
    task={...task,id:Math.floor(Math.random()*10000)}
    setTasks([...tasks,task])
  }
  const onDeleteTask=(deletetask)=>{
    setTasks(tasks.filter((task)=>task.id!==deletetask.id));
    Swal.fire({
      icon: 'success',
      title: 'Done !',
      text: `Successfully Deleted ${deletetask.title}`,
      
     
    })
  }
  const onToggle=(taskToToggle)=>{
    taskToToggle={...taskToToggle,remainder:!taskToToggle.remainder}
    setTasks(
    
      tasks.map((task)=>
      task.id===taskToToggle.id ? taskToToggle :task
      )
      
    )
    Swal.fire({
      icon: 'success',
      title: 'Done !',
      text: `Successfully Changed Remainder To '${taskToToggle.remainder}'`,
      timer:6000,
     
    })

  }
  return (
    <>
    <div className="App">

      <Header/>
      {console.log(tasks)}
      
      </div>
      <div id='display-grid'>
      <Todofrom onAdd={onAddTask}/>
      
      <TasksContainer tasks={tasks} onDeleteTask={onDeleteTask} onToggle={onToggle}/>
      </div>
      <Footer/>
    
    </>
  );
  

}
export default App;
