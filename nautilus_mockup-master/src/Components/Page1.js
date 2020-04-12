import React, { Component } from 'react';
import matches from '../images/Landing-page/matches.png';
import './Page1.css'



class Page1 extends Component{
    render(){
        return (
            <div className='landing-grid'>
                <div className='landing-grid-img'>
                <img src={matches} alt="matches"/> 
                <div className='Landing-page'>
                    <h2>Issue 079</h2>
                    <h1>Catalysts</h1>
                    <button className='Landing-page-btn'>  
                        See Full Issue</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Page1;
