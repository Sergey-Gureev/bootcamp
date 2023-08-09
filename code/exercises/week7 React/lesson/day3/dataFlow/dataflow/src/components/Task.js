import React  from 'react';

export default function Task ({task, markComplete}) {
    const complete = () => markComplete(task.text)
    return <div>
      {task.text} - <button onClick={complete}>Complete</button>
    </div>
  }
