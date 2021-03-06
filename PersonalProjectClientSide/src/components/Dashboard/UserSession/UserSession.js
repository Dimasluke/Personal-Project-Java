import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSession.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { userSession, setToken } from '../../../redux/reducer';
import jwtDecode from 'jwt-decode'

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
        const userInfo = { username, password }
        axios.post('/api/users/login', userInfo).then(response => {
            const username = jwtDecode(response.data.token).username
            this.props.userSession(username)
            console.log(response.data.token)
            localStorage.setItem('token', `${response.data.token}`)
            this.props.setToken(response.data.token)
            this.props.history.push('/')
        }).catch(err => {
            console.log(err)
            // this.setState({error: err.response.data})
        })
    }

    render (){
        return (
            <div className='container userSession-container'>
                
                <div className='row'>
                    <div className='col-sm-6'>
                        <form className='usersession-card border border-primary shadow p-3 mb-5 bg-white rounded'>
                            <span className='text-danger'>{this.state.error}</span>
                            <h2>Login</h2>
                            <div className='form-group'>
                                <label htmlFor='username-login'>Username</label>
                                    <input 
                                        className='form-control' 
                                        id='username-login'
                                        value={this.state.username} 
                                        onChange={e => this.setState({ username: e.target.value})}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password-login'>Password</label>
                                    <input 
                                        type='password' 
                                        className='form-control' 
                                        id='password-login' value={this.state.password} 
                                        onChange={e => this.setState({ password: e.target.value})}></input>
                                    <div className='show-password'><input type='checkbox' onClick={this.showPassword} /><span>  Show Password</span></div>
                            </div>
                            <div className='button-container'>
                                <button 
                                    className='btn btn-primary login-button' 
                                    onClick={this.loginUser}>Submit</button>
                                <Link to='/' className='btn btn-danger login-button'>Cancel</Link>
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

export default connect(null, {userSession, setToken})(UserSession);