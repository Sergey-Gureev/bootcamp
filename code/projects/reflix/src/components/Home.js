import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import User from './User.js'




const Home = ({users}) => {

  return (
    <div className="home">
        <div>Who is watching?</div>
        {users.map((user) => {return <User key={user.name} user={user}/>})} 
    </div>
  );
}


export default Home;