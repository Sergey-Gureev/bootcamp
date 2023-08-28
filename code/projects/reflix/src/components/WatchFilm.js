import React from 'react';

const WatchFilm = ({film, user}) => {

function addFilmToUser(){
    user.films.push(film)
    user.money -= 3
}
  return (
    <div className="film">
        <h3>{film.title}</h3>
        <video src={`https://api.themoviedb.org/3/movie/${film.id}/videos`}/>
        <p>{film.overview}</p>
    </div>
  );
}


export default WatchFilm;


    