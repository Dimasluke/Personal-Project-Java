import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSession.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { userSession } from '../../../redux/reducer';


class UserRegister extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    registerUser = () => {
        const { username, password } = this.state;
        const userInfo = { username, password };
        axios.post('/register', userInfo).then(response => {
            console.log(response)
            this.props.userSession(response.data.username)
            this.props.history.push('/dashboard')
        }).catch(err => {
            this.setState({error: err.response.data.message})
        })
    }

    showPassword = () => {
        let x = document.getElementById('password-register')
        x.type === 'password' ? x.type = 'text' : x.type = 'password'
    }

    render () {
        return (
            <div className='container userSession-container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <form className='usersession-card border border-primary shadow p-3 mb-5 bg-white rounded'>
                            <span className='text-danger'>{this.state.error}</span>
                            <h2>Register</h2>
                            <div className='form-group'>
                                <label htmlFor='username-register'>Username</label>
                                    <input className='form-control userSession-input' id='username-register' value={this.state.username} onChange={e => {this.setState({ username: e.target.value})}}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password-register'>Password</label>
                                    <input type='password' className='form-control' id='password-register' value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                                    <div className='show-password'><input type='checkbox' onClick={this.showPassword} /><span>  Show Password</span></div>
                            </div>
                            <div className='button-container'>
                                <button className='btn btn-primary login-button' onClick={this.registerUser}>Submit</button>
                                <Link to='/dashboard' className='btn btn-danger login-button'>Cancel</Link>
                            </div>
                            <div>
                                Already have an account? <Link to='/userSession'> Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {userSession})(UserRegister);