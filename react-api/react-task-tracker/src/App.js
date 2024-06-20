import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'


function App() {
 const [showAddTask, setShowAddTask] = useState(false)
 const [tasks , setTasks] = useState([
  {
    id: 1,
    text:'laundry', 
    day: 'June 19th at 2:00pm',
    reminder: true,
  },
  {
    id: 2,
    text:'fix washing machine',
    day: 'June 21st at 5:30pm',
    reminder: true,
  }, 
  {
    id: 3,
    text: 'nap',
    day: 'June 22nd at 1:00pm',
    reminder: false,
  }]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
