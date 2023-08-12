import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
// spotcheck 1
// const App = () => {
//   const logClick = () => {
//     console.log("I was clicked!")
//   }

//   const logHover = () => {
//     console.log("I was hovered!")
//   }

//   return (
//     <button onClick={logClick} onMouseEnter={logHover}>Click me</button>
//   );
// }

//spotchek2
// function App() {

//   let companiesData = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }]
  
//   let [companies, setCompanies] = useState(companiesData)

// return (
//     <div className="ex-space">
//       {companies.map(company => <Company name={company.name} revenue={company.revenue}></Company>)}
//     </div>
//   )
// }

//spotcheck 3
// function App() {
//   const [reservations, setReservations] = useState([
//     { day: "Monday", time: 2000, name: "Earl" },
//     { day: "Monday", time: 1845, name: "Ella" },
//     { day: "Tuesday", time: 1930, name: "Linda" },
//     { day: "Wednesday", time: 2015, name: "Anni" }
//   ]);

//   return (
//       <div className="ex-space">
//         <h4 className="ex-title">Spotcheck 5</h4>
//         <div className="exercise" id="spotcheck-5">
//           <div>
//             <Calendar reservations={reservations} />
//             <Register reservations={reservations} />
//           </div>
//         </div>
//       </div>
//   )
// }

// function Register({reservations}) {

//   return (<div id="register">
//       <h4>You cannot reserve during these times:</h4>
//       {reservations.map(r => {
//         return <div key={r.name}>{r.day} @ {r.time}</div>
//       })}
//   </div>)
// }

// function Calendar(props) {
//   return (
//     <div id="calendar">
//         <h4>Calendar</h4>
//         {props.reservations.map(r => {
//           return <div key={r.name}>{r.name} has a reservation on {r.day} @ {r.time}</div>
//         })}
//     </div>
//   )
// }

//hot spot 4 
function Hot() {
  return (<div>It's too HOT here</div>)
}

function Cold() {
  return (<div>It's very COLD here</div>)
}

function App() {
  const [temperature, setTemperature] = useState("hot")
  const toggleTemperature = () => {
      setTemperature(temperature === "hot" ? "cold" : "hot");
  }
  return (
      <div className="App">
        {temperature == "hot" ? <Hot/> : <Cold/>}
        <button onClick={toggleTemperature}>Change Temp!</button>
      </div>
  );
}

//hotspot5 objects import { useState } from 'react';

// const ClassRoom = () => {
//   const [classRoom, setClassRoom] = useState({ students: [] });

//   const addStudent = (student) => {
//     let newClassroom = {...classRoom}
//     newClassroom.students = [...classRoom.students, student]
//     setClassRoom(newClassroom);
//   }
//   return <div></div>
// }

// export default ClassRoom;


// Like counter
function App() {
  const [likes, setLikes] = useState(0)
  const increaseLike = () => {
    setLikes(likes+1);
  }
  return (
    <div className="App">
      <div>{likes}</div>
      <button onClick={increaseLike}>Like! 👍</button>
    </div>
  );
}





export default App;
