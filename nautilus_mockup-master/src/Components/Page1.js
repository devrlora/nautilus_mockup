import React, { Component } from 'react';
import matches from '../images/Landing-page/matches.png';



class Page1 extends Component{
    render(){
        return (
            <div className='landing-grid'>
                <div>
                <img src={matches} alt="matches"/> 
                <div className='Landing-page'>
                    <h1>Landing-page</h1>
                    <button className='Landing-page-btn'>  
                        Button</button>
                </div>
                </div>
                <h1>hi</h1>
            </div>
        )
    }
}
export default Page1;
