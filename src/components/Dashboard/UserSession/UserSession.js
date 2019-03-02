import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSession.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { userSession } from '../../../redux/reducer';

class UserSession extends Component {
    constructor ( props ) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    showPassword = () => {
        let x = document.getElementById('password-login')
        x.type === 'password' ? x.type = 'text' : x.type = 'password'
    }

    loginUser = () => {
        const { username, password } = this.state;
        const userInfo = { 
            "username" : username, 
            "password" :password }
        axios.post('/login', userInfo).then(response => {
            console.log(response)
            this.props.userSession(response.data.username)
            this.props.history.push('/dashboard')
        }).catch(err => {
            this.setState({error: err.response.data.message})
        })
    }

    render (){
        console.log(this.state.error)
        return (
            <div className='container userSession-container'>
                
                <div className='row'>
                    <div className='col-sm-6'>
                        <form className='usersession-card border border-primary shadow p-3 mb-5 bg-white rounded'>
                            <span className='text-danger'>{this.state.error}</span>
                            <h2>Login</h2>
                            <div className='form-group'>
                                <label htmlFor='username-login'>Username</label>
                                    <input className='form-control' id='username-login' value={this.state.username} onChange={e => this.setState({ username: e.target.value})}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password-login'>Password</label>
                                    <input type='password' className='form-control' id='password-login' value={this.state.password} onChange={e => this.setState({ password: e.target.value})}></input>
                                    <div className='show-password'><input type='checkbox' onClick={this.showPassword} /><span>  Show Password</span></div>
                            </div>
                            <div className='button-container'>
                                <button className='btn btn-primary login-button' onClick={this.loginUser}>Submit</button>
                                <Link to='/dashboard' className='btn btn-danger login-button'>Cancel</Link>
                            </div>
                            <div>
                                Need an account? <Link to='/userSession/register'>Register Here</Link>
                            </div>
                        </form>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default connect(null, {userSession})(UserSession);