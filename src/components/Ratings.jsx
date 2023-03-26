import React from 'react'
import Rating from '@mui/material/Rating';

function Ratings(props){
    function changeToNumber(str){
        var resString = "";
        let i=0;
        while (i<str.length && str[i] !== '/'){
            resString+=str[i]
            i+=1
        }
        return parseFloat(resString) 
    }

    return (
        <div className='rating'>
            {props.rate.map(rating => 
                    <div className="rating-source">
                        <span>{rating.Source}: {rating.Value} </span>
                    </div>
            )}
            <Rating
                name="read-only"
                precision={0.25}
                value={changeToNumber(props.rate[0].Value)/2}
            />
        </div>
    )
}

export default Ratings;