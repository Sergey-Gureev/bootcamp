import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import Film from './Film.js'

const APIKEY = 'ac07941cf70f1a45587535895c22aefe'
const apiReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzA3OTQxY2Y3MGYxYTQ1NTg3NTM1ODk1YzIyYWVmZSIsInN1YiI6IjY0ZTM3NWRmYjc3ZDRiMTE0MDFiZjkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKUEACEy62prRhhZqeAmapTTRS3ZneDbM5C26_4uESY'


const Catalog = ({users, manageFilm }) => {


  let name = useLocation().state.user
  let user = users.filter(u => u.name == name)[0]
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

  const [userInput, setUserInput] = useState(null)
  const [films, setFilms] = useState(null)

  console.log(films)
  console.log(user, user.name)

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    setFilms(getFilms(url))
  }, [])

  function getFilms(url) {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiReadAccessToken}`
      }
    };
    fetch(url, options)
      .then(response => response.json().then(json => setFilms(json.results)))
      .catch(err => console.error(err));
  }
 
  function update(e) {
    // setUserInput(e.target.value)
    let url = `https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=true&video=true`
    getFilms(url)
  }
  
  return (
    <div className="catalog">
      <input placeholder='Search' name="filmName" onChange={e => setUserInput(e.target.value)}></input><button onClick={update}>Search</button>
      <div className='userInfo'><span>User: {user.name} </span><span >Budget: </span><span>{user.money}$</span></div>
      <div className='filmContainer'>
        <div className='rented'>
          {user.films.length ? <p>rented films: {user.films != []}</p> : null}
          {user.films ? user.films.map(film => {return <Film key={film.id} film={film} user={user} manageFilm={manageFilm} />}) : null}
        </div>
        {films ? films.map(film => {return <Film key={film.id} film={film} user={user} manageFilm={manageFilm}/>}) : null}
      </div>
    </div>
  );
}


export default Catalog;