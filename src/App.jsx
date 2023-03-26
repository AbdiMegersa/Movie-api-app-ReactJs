import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './components/Movie';
import sadface from './assets/sad.png';
import sim from './assets/sim.png';
import data from './data';
import second from './second';


function App() {

  const [name, setName] = useState("")
  const handleChange = (e) => setName(e.target.value)
  const [fmovie, setFMovie] = useState(second);

  const findmovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=364b797e&t=${name}`)
      .then(res => res.json())
      .then(movie => setFMovie(movie))
    }


  return (
    <div className="App">
        <header>
          <img src={sim} className="simson" />
          <h1>Abe Movies</h1>
        </header>
        <center>
          <div className='cont'>
            <input 
              type="text"
              onChange={handleChange}
            />
            <button 
              onClick={findmovie}
            >
                Search
            </button>
          </div>
          <div className="movie-container">
          {fmovie.Response === "True" ? (
            <Movie 
              img={fmovie.Poster}
              title={fmovie.Title}
              year={fmovie.Year}
              rated={fmovie.Rated}
              writer={fmovie.Writer}
              type={fmovie.Type}
              plot={fmovie.Plot}
              genre={fmovie.Genre}
              country={fmovie.Country}
              rating={fmovie.Ratings}
              award={fmovie.Awards}
            />
          ) : 
            <center className="notfound">
              <img src={sadface} className="sadface"/>
              <h1 className='notfoundheader'>Movie Not Found!</h1>
              <p>Please try again with different name.</p>
            </center>
           }
            
          </div>
        </center>

    </div>
  )
}

export default App
