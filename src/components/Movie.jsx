import React from 'react'
import Ratings from './Ratings';


function Movie(props) {

    return(
        <div className="movie">
            <div className="movie-img">
                <img src={props.img} />
            </div>


            <div className="description">
                <h3>{props.title}</h3>
                <p>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</p>
                <p>{props.plot}</p>
                <p>{props.year}</p>
                <p>Rated: {props.rated}</p>
                <p>Writer: {props.writer}</p>
                <p>Genre:{props.genre}</p>
                <p>{props.country}</p>
                <p>Awards: {props.award}</p>
                <Ratings rate={props.rating}/> 

            </div>
        </div>
    )
}

export default Movie;