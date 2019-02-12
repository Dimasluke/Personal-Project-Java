import React, { Component } from 'react';
import { connect } from 'react-redux';

class Champions extends Component {
    render(){
        console.log(this.props)
        return (
            <div>{this.props}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect (mapStateToProps)(Champions)