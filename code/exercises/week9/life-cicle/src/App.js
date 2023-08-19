import logo from './logo.svg';
import './App.css';
// import Red from './Red';
// import Blue from './Blue';

import { useState, useEffect } from 'react'


function App() {
  const [titleIndex, setTitleIndex] = useState(0)

  const updateTitle = () => {
    console.log("update index", titleIndex+ 1);
    setTitleIndex(titleIndex + 1);
  }

  useEffect(() => {
    setTimeout(updateTitle, 1000)
  })

  return (
    <div>
      <div className="box">{titleIndex}</div>
    </div>
  );
}


export default App;
