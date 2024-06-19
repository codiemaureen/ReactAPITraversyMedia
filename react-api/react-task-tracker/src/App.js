import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


function App() {

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

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
