import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.css'

class Landing extends Component {
    render () {
        return (
            <div className='container landing-page'>
                <div className="jumbotron">
                    <h1 className="display-4">Legendary</h1>
                    <p className="lead">League of Legends</p>
                    <hr className="my-4" />
                    <p>Explore features including a champion builder</p>
                    <Link to='/champions' className="btn btn-primary btn-lg" href="#" role="button">Learn More</Link>
                </div>
            </div>
        )
    }
}

export default Landing