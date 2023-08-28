import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Catalog from './components/Catalog.js'
import EntityDescription from './components/EntityDescription.js'
import { useState } from 'react';

const templateUsers = [
  {name:'Sergey', money: 10, films: []},
  {name:'Andrey', money: 10, films: []},
  {name:'Vitaliy', money: 10, films: []},
]

function App() {  
  
  const [users, setUsers] = useState(templateUsers)

  function manageFilm(user, film, action){
    let newUsers = [...users]

    let i = newUsers.findIndex(u => {return u.name == user.name})
    let newFilms = [...user.films]
    let newU
    if (action == 'add') {
      newFilms.push(film)
      newU = {name:user.name, money: user.money -3, films: newFilms}
    } else if (action == 'remove'){
      newU = {name:user.name, money: user.money +3, films: newFilms.filter(e => e !== film)}
    }

    newUsers.splice(i, 1, newU)
    setUsers(newUsers)
  }
  
  
  return (
    <div className="App">
      <Router>
        <div >
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home users={users} />} />

          <Route path="/Catalog"  element={<Catalog users={users} manageFilm={manageFilm}/>}/>  
          <Route path="/film/:id" element={<EntityDescription />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
