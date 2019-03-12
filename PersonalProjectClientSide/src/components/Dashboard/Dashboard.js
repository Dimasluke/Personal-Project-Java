import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './Dashboard.css';

class Champions extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='card mb-3 main-card'>
                        <img src='https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' className='card-img-top main-img' />
                        <div className='card-body'>
                            <h1 className='card-title main-title'>Legendary</h1>
                            <p className='card-text main-text'>League of Legends Champion Information/Team Builder</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Champions