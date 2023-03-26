import React from 'react'
import sim from '../assets/sim.png'

function Header(){
    return (
        <header>
            <div className="brand">
                <img src={sim} className="simson" />
                <h1>MovieAPI</h1>
            </div>
            <div className='developer'>
                <a href="#">Developer</a>
            </div>
        </header>
    )
}
export default  Header;
