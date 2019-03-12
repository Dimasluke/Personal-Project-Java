import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Dashboard/Navbar/Navbar';
import { connect } from 'react-redux';
import { savedTeams } from '../../redux/reducer';
import { Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Community.css';


class Community extends Component {

    async componentDidMount () {

        const response = await axios.get('/teams', {
            headers: { Authorization: this.props.token}
        })
        this.props.savedTeams(response.data)

    }

    

    render() {
        const {savedTeamList} = this.props
        console.log(this.props)
        const mappedTeams = savedTeamList.map(team => {
            // console.log(team.champions.reduce((total, current) => {
            //     return total + parseInt(current.damage)
            // }, 0))
            const options={
                scale: {
                    ticks: {
                        min: 0,
                        max: 50
                    }        
                }
            }
            const data={
                labels: ['Attack', 'Toughness', 'Crowd Control', 'Mobility', 'Utility'],
                datasets: [
                    {
                        label: "Stats",
                        backgroundColor: "rgba(17, 182, 247, 0.35)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [team.champions.reduce((total, current) => {
                                    return total + parseInt(current.damage)
                                }, 0),
                                team.champions.reduce((total, current) => {
                                    return total + parseInt(current.toughness)
                                }, 0),
                                team.champions.reduce((total, current) => {
                                    return total + parseInt(current.crowdControl)
                                }, 0),
                                team.champions.reduce((total, current) => {
                                    return total + parseInt(current.mobility)
                                }, 0),
                                team.champions.reduce((total, current) => {
                                    return total + parseInt(current.utility)
                                }, 0),
                        ]
                    }
                ]
            }
            return (
                <div key={team.id} className='container team-container-community'>
                    <div>
                        <div className='card'>
                            <div className='card-body'>
                                <blockquote className='blockquote mb-0'>
                                    <p>{team.teamName}</p>
                                    <footer className='blockquote-footer'>Created by <cite title='Source Title'>{team.teamOwner}</cite></footer>
                                </blockquote>
                            </div>
                            <Link className='btn btn-primary team-button' to={`/community/${team.id}`}>></Link>
                        </div>
                    </div>
                    <div className='team-card-container'>
                        <div className='card'>
                            <div className='card-header'>{team.champions[0].name}</div>
                            <div className='card-body'>
                                <img className='card-img card-img-community' src={team.champions[0].iconUrl} />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>{team.champions[1].name}</div>
                            <div className='card-body'>
                                <img className='card-img card-img-community' src={team.champions[1].iconUrl} />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>{team.champions[2].name}</div>
                            <div className='card-body'>
                                <img className='card-img card-img-community' src={team.champions[2].iconUrl} />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>{team.champions[3].name}</div>
                            <div className='card-body'>
                                <img className='card-img card-img-community' src={team.champions[3].iconUrl} />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>{team.champions[4].name}</div>
                            <div className='card-body'>
                                <img className='card-img card-img-community' src={team.champions[4].iconUrl} />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-body'>
                                <Radar
                                    data={data}
                                    options={options}
                                    height={220}
                                    width={250} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Navbar />
                <section className='container team-container'>
                    {mappedTeams}
                </section>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        savedTeamList: state.savedTeams,
        token: state.userToken
    }
}

export default connect (mapStateToProps, {savedTeams})(Community);