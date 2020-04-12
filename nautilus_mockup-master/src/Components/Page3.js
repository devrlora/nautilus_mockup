import React, { Component } from 'react';
import clovercard from '../images/2-Article-page/clover_card.jpg';
import './Page3.css'



class Page3 extends Component{
    render(){
        return (
            <div className='Article-grid-parent'>
                <div className='Article-grid'>
                <img src={clovercard} alt="clovercard"/> 
                <div className='Article-page'>
                    <h3 >The Nautilus Spotlight</h3>
                    <h2 className='p3-text'>Why The Laws Of Physics Are Inevitable</h2>
                    <button className='Article-page-btn'>  
                        Read Now</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Page3;
