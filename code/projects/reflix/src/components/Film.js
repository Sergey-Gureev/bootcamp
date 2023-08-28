import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import EntityDescription from './EntityDescription.js'
import Modal from './Modal.js'
import { useState } from 'react';



const Film = ({ film, user, manageFilm}) => {
  const [isOpen, setModalOpen] = useState(false)

  function add(){
    setModalOpen(true)
    manageFilm(user, film, 'add')
  }
  function remove(){
    setModalOpen(true)
    manageFilm(user, film, 'remove')

  }
  function button(){
    let modalAction =  user.films.includes(film) ? 'Rented' : 'Unrented'
    return (user.films.includes(film) 
    ? <><button onClick={remove}>remove</button>{isOpen && <Modal filmName={film.title} action={modalAction} setModalOpen={setModalOpen} />}</>
    : <><button onClick={add}>add</button>{isOpen && <Modal filmName={film.title} action={modalAction} setModalOpen={setModalOpen} />}</>  
    )
  }
  return (
        <div className="film">
            { button() }
            {/* {isOpen && <Modal filmName={film.title} action={modalAction} setModalOpen={setModalOpen} />} */}
            <Link to={`/film/${film.id}`} >
                <h3>{film.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/>
                <p>{film.overview}</p>
            </Link>

        </div>
  );
}


export default Film;


    