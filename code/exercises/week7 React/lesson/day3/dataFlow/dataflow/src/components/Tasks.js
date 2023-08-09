import React, { useState } from 'react';
import Task from './Task.js'



export default function Tasks() {
    const [tasks, setTasks] = useState([
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
    ]);

    const markComplete = (text) => {
        let newTasks = [...tasks]
        newTasks.find(t => t.text === text).complete = true
        setTasks(newTasks);
    }

    return tasks
      .filter(t => !t.complete)
      .map(t => <Task key={t.text} task={t} markComplete={markComplete} />)
}