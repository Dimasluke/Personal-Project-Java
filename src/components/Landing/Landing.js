import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                Landing
                <Link to='/dashboard'>Dashboard</Link>

            </div>
        )
    }
}

export default Landing