import React from 'react'
import sim from '../assets/sim.png'

function Header(){
    return (
        <header>
            <div className="brand">
                <img src={sim} className="simson" />
                <h1></h1>
            </div>
            <div className='developer'>
                <a href="#">A-Tech</a>
            </div>
        </header>
    )
}
export default  Header;
