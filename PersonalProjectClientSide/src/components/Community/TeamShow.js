import React, { Component } from 'react';
import Navbar from '../Dashboard/Navbar/Navbar';
import axios from 'axios';
import { Radar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getTeam, setTeamEdit, addChampion, teamEdit, updateTeamName, updateTeamPlus } from '../../redux/reducer';
import { Link } from 'react-router-dom'
import './TeamShow.css';
import './Community.css'

class TeamShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamChampions: [],
            commentText: '',
            comments: []
        }
    }

    deleteTeam = () => {
        console.log(this.props.match.params.id)
        axios.delete(`/teams/${this.props.match.params.id}`,{
            headers: { Authorization: this.props.token}
        }).then(response => {
            console.log(response)
        })
    }

    addComment = () => {
        axios.post(`/teams/${this.props.match.params.id}/comments`, {
            "author" : `${this.props.user}`,
            "text" : `${this.state.commentText}`,
        } , {
            headers: { Authorization: this.props.token}
        }).then(response => {
            const stateComments = []
            this.state.comments.map(comment => {
                stateComments.push(comment)
            })
            stateComments.push(response.data)
            this.setState({
                comments: stateComments
            })
        })
    }

    componentDidMount () {
        axios.get(`/teams/${this.props.match.params.id}`,
            {
                headers: { Authorization: this.props.token}
            }
        ).then(response => {
            console.log("axios.get teamid",response.data)
            this.props.getTeam(response.data)
            this.setState({
                teamChampions: this.props.teamInfo.champions
            })
        })

        axios.get(`/teams/${this.props.match.params.id}/comments`,
            {
                headers: { Authorization: this.props.token}
            }
        ).then(response => {
            console.log("axios.get comments",response.data)
            console.log(response.data)
            this.setState({
                comments: response.data.content
            })
        })
    }

    addEditTeam = () => {
        this.state.teamChampions.map(champion => {
            this.props.addChampion(champion)
            this.props.updateTeamPlus(champion)
        })
    }

    render(){
        console.log("this.state ", this.state)
        const mappedComments = this.state.comments.map(comment => {
            return (
                
                <div className='card container team-show-comment-container'>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            <p>{comment.text}</p>
                            <footer className='blockquote-footer'><cite title='Source Title'>{comment.author}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            )
        })
        const mappedTeam = this.state.teamChampions.map(champion => {
            return (
                <div className='card card-team-show'>
                    <div className='card-header'>{champion.name}</div>
                    <div className='card-body'>
                        <img src={champion.iconUrl} className='card-img card-img-community'/>
                    </div>
                </div>

            )
        })
        var data = {
            labels: ['Attack', 'Toughness', 'Crowd Control', 'Mobility', 'Utility'],
            datasets: [
                {
                    label: `${this.props.teamInfo.teamName}`,
                    backgroundColor: "rgba(17, 182, 247, 0.35)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [this.state.teamChampions.reduce((total, current) => {
                        return total += current.damage
                    }, 0), 
                    this.state.teamChampions.reduce((total, current) => {
                        return total += current.toughness
                    }, 0), 
                    this.state.teamChampions.reduce((total, current) => {
                        return total += current.crowdControl
                    }, 0), 
                    this.state.teamChampions.reduce((total, current) => {
                        return total += current.mobility
                    }, 0), 
                    this.state.teamChampions.reduce((total, current) => {
                        return total += current.utility
                    }, 0)]
                }
            ]
        };
        const options = {
            scale: {
                ticks: {
                    min: 0,
                    max: 50
                }        
            }
        };
        return(
            <div>
                <Navbar />
                <div className='team-show-container'>
                    <div className='container'>
                        <Radar 
                            className='radar-container-community'
                            height={45}
                            width={100}
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className='community-team-show'>
                        {mappedTeam}
                    </div>
                    <div className='team-show-button-group'>
                        <Link 
                            to='/teamBuilder'
                            onClick={e => {
                                this.props.updateTeamName(this.props.teamInfo.teamName)
                                this.props.teamEdit(true)
                                this.addEditTeam()
                                this.props.setTeamEdit(this.props.teamInfo)}}
                            className='btn btn-warning btn-team'>Edit</Link>
                        <Link 
                            to='/community'
                            className='btn btn-danger btn-team'
                            onClick={e => this.deleteTeam()}>Delete</Link>
                    </div>
                    <form className='container'>
                        <div className='form-group'>
                            <label htmlFor='commentTextArea'>Add Comment</label>       
                            <textarea 
                                className='form-control'
                                id='commentTextArea'
                                rows='3'
                                value={this.state.commentText} 
                                onChange={e => this.setState({ commentText: e.target.value})}/>
                            <button 
                                className='btn btn-primary'
                                onClick={e => {
                                    this.setState({ commentText: ''})
                                    this.addComment()}}>Submit
                            </button>
                        </div>
                    </form>
                    {mappedComments}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        teamInfo: state.teamShow,
        token: state.userToken,
        user: state.user
    }
}

export default connect(mapStateToProps, {getTeam, setTeamEdit, addChampion, teamEdit, updateTeamName, updateTeamPlus})(TeamShow)