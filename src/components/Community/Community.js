import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Dashboard/Navbar/Navbar';
import { connect } from 'react-redux';
import { savedTeams } from '../../redux/reducer';


class Community extends Component {

    componentDidMount () {
        this.getSavedTeams();
    }

    getSavedTeams = () => {
        axios.get('/teams').then(response => {
            this.props.savedTeams(response.data)
        })
    }

    render() {
        console.log(this.props)
        const {savedTeamList} = this.props
        console.log(Object.values(savedTeams))
        return (
            <Navbar />
        )
    }

}

const mapStateToProps = state => {
    return {
        savedTeamList: state.savedTeams
    }
}

export default connect (mapStateToProps, {savedTeams})(Community);