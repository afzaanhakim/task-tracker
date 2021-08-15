import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'watch TV',
      day:'August 15 at 10:00pm',
      reminder:true
    },
    {
      id:2,
      text:'make a react app/practice',
      day:'August 15 at 3:00pm',
      reminder:true
    },
    {
      id:3,
      text:'go out',
      day:'August 16 at 7:00pm',
      reminder:false
    },
    ])

    // delete task

    const deleteTask = (id) => {
console.log("delete", id)
setTasks(tasks.filter((task)=>task.id !== id))

    }
  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  );
}

export default App;
