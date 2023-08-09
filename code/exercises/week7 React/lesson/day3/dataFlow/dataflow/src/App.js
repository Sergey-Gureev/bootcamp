import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks.js'
import Quotes from './components/Quotes.js'
import Exercise1 from './components/Exercise1.js'
import Exercise2 from './components/Exercise2.js'
import React, { useState } from 'react'

function App() {
  
  const [tasks, setTasks] = useState([
    { text: "Take out trash", complete: false },
    { text: "Trash talk Carrie", complete: true },
    { text: "Carry boxes upstairs", complete: false }
  ])
  
  return <div>
     {/* <Tasks tasks={tasks}/> */}
     {/* <Quotes /> */}
    {/* <Exercise1 /> */}
    <Exercise2 />
    </div>;
}

export default App;
