import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const APIKEY = 'ac07941cf70f1a45587535895c22aefe'
const apiReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzA3OTQxY2Y3MGYxYTQ1NTg3NTM1ODk1YzIyYWVmZSIsInN1YiI6IjY0ZTM3NWRmYjc3ZDRiMTE0MDFiZjkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKUEACEy62prRhhZqeAmapTTRS3ZneDbM5C26_4uESY'


const EntityDescription = ({user}) => {
  
  let movie_id = useLocation().pathname.split('/').pop()
  console.log(movie_id)
  const [film, setFilm] = useState(null)

  function  getFilm(movie_id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiReadAccessToken}`
      }
    };
    let url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`
    fetch(url, options)
    // .then(response => response.json().then(json => {console.log(json.results[0].key)}))
    // .then(response => response.json().then(json => json.results[0].key))
    .then(response => response.json().then(json => setFilm(json.results[0])))
    .catch(err => console.error(err));
    console.log(film)
  }

  useEffect(() => {
    setFilm(getFilm(movie_id))
  }, [])
  function getVideo(){
    if (film) { return <iframe width="695" height="391" src={`https://www.youtube.com/embed/${film.key}`} title={film.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
    else {
        return null
    }
  }

  const navigate = useNavigate();
  return (
    <div className="EntityDescription">
      <button onClick={() => navigate(-1)}>Go back</button>
        <div className='filmContainer'>
            {getVideo()}
        </div>
    </div>
  );
}


export default EntityDescription;