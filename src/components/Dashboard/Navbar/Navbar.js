import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { userSession } from '../../../redux/reducer'
import './Navbar.css';

class Navbar extends Component {

    componentDidMount = () => {
        axios.get('/sessionInfo').then(response => {
            console.log(response.data)
            this.props.userSession(response.data.username)
        })
    }

    destroySession = () => {
        axios.post('/logout').then(response => {
            this.props.userSession(response.data)
        })
    }

    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/dashboard' className="navbar-brand">Legendary</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/champions' className='nav-link'> Champions <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/teamBuilder"> Teams </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/community"> Community </Link>
                    </li>
                    </ul>
                    { this.props.user ? 
                        <span id='userLoggedIn'>
                            <span>Welcome, {this.props.user} </span>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Profile
                                    </a>
                                    <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Champions</a>
                                    <a className="dropdown-item" href="#">Teams</a>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={this.destroySession}>Sign Out</button>
                                    </span>
                                </li>
                            </ul>   
                        </span> : 
                        <Link to='/userSession' className="nav justify-content-end">Login</Link> }  
                </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {userSession})(Navbar);