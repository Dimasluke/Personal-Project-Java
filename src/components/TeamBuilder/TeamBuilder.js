import React, { Component } from 'react';
import Navbar from '../Dashboard/Navbar/Navbar';
import axios from 'axios';
import './TeamBuilder.css';
import { Radar } from 'react-chartjs-2';
import { championStats, addChampion, removeChampion, resetTeam } from '../../redux/reducer';
import { connect } from 'react-redux';



class TeamBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            champions: [],
            championSearch: '',
            team: [],
            teamDamage: 0,
            teamToughness: 0,
            teamCrowdControl: 0,
            teamUtility: 0,
            teamMobility: 0,
            teamName: ''
        }
    }

    componentDidMount (){
        this.getChampions();
    }

    getChampions = async () => {
        const response = await axios.get('/api/champions');
        const { data } = response
        this.setState({
            champions: data
        })
    }

    saveTeam = () => {
        const teamInfo = {
            "teamName": this.state.teamName,
            "champion1": this.props.team[0].id + "",
            "champion2": this.props.team[1].id + "",
            "champion3": this.props.team[2].id + "",
            "champion4": this.props.team[3].id + "",
            "champion5": this.props.team[4].id + "",
        }
        console.log(teamInfo)
        axios.post('/teams', teamInfo).then(response => {
            console.log(response.data)
        })
    }

    updateTeamName = (teamName) => {
        this.setState({
            teamName: teamName
        })
    }

    foochampion = (e) => {
        axios.get(`/api/champions/${e}`).then(response => {
            this.props.championStats(response.data[0])
            this.props.addChampion(response.data)
        })
    }

    resetTeam = () => {
        this.setState({
            teamDamage: 0,
            teamToughness: 0,
            teamCrowdControl: 0,
            teamUtility: 0,
            teamMobility: 0,
        })
    }
        
    updateTeamMinus = (champion) => {
        let { teamDamage, teamToughness, teamCrowdControl, teamMobility, teamUtility } = this.state
        this.setState({
            teamDamage: teamDamage -= champion.damage,
            teamToughness: teamToughness -= champion.toughness,
            teamCrowdControl: teamCrowdControl -= champion.crowdControl,
            teamMobility: teamMobility -= champion.mobility,
            teamUtility: teamUtility -= champion.utility
        })
    }

    updateTeamPlus = (champion) => {
        let { teamDamage, teamToughness, teamCrowdControl, teamMobility, teamUtility } = this.state
        this.setState({
            teamDamage: teamDamage += champion.damage,
            teamToughness: teamToughness += champion.toughness,
            teamCrowdControl: teamCrowdControl += champion.crowdControl,
            teamMobility: teamMobility += champion.mobility,
            teamUtility: teamUtility += champion.utility
        })
    }

    render(){
        const { champions } = this.state
        const result = champions.filter(champion => {
            return champion.name.toLowerCase().includes(this.state.championSearch)
        })
        let mappedChampions = result.map(champion => {
            return (
                <div className='col-1 card champ-info shadow-sm p-1 bg-white rounded champion-card' key={champion.id} id='champion-card'>
                    <button
                        type="button" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        className='champ-button'
                        title={champion.name}
                        onClick={event => {
                            this.foochampion(champion.name)
                            this.updateTeamPlus(champion)
                            }}>                 
                            <img 
                                className='card-img-top' 
                                src={champion.iconUrl} alt='...'/>
                    </button>
                </div>
            )
        })
        let mappedTeam = this.props.team.map((champion, index) => {
            let data = {
                labels: ['A', 'T', 'CC', 'M', 'U'],
                datasets: [
                    {
                        label: champion.name,
                        backgroundColor: "#E8A87C",
                        strokeColor: "#E27D60",
                        pointColor: "#C38D9E",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "#41B3A3",
                        data: [
                            champion.damage,
                            champion.toughness,
                            champion.crowdControl,
                            champion.mobility,
                            champion.utility
                        ]
                    }
                ]
            }
            const options = {
                scale: {
                    ticks: {
                        min: 0,
                        max: 10
                    }        
                }
            }
            return (
                <div className='team-card border border-warning rounded' key={index}>
                    <div className='card-radar'>
                        <Radar
                            height={100}
                            width={100}
                            data={data}
                            options={options}
                        />
                    </div>
                    <button 
                        onClick={e => {
                            this.updateTeamMinus(champion)
                            this.props.removeChampion(index)
                        }} 
                        className='btn btn-danger team-card-button'>Delete</button>
                </div>
            )
        })
        var data = {
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
                    data: [this.state.teamDamage, 
                            this.state.teamToughness, 
                            this.state.teamCrowdControl, 
                            this.state.teamMobility, 
                            this.state.teamUtility]
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

        return (
            <div>
                <Navbar />
                <div className='test-top'>
                    <div id='champion-container'>
                        <form className='container champion-form'>
                            <div className="form-group champion-input">
                                <label className='input-label' htmlFor="formGroupExampleInput">Champion Search</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter name here..." 
                                    onChange={e => this.setState({ championSearch: e.target.value})} 
                                />
                            </div>
                        </form>
                        <div className='row champion-list'>
                            {mappedChampions}
                        </div>
                    </div>
                    <div className='team-container'>
                        <h1>{this.state.teamName}</h1>
                        <input 
                            type='text' 
                            placeholder='Enter team name...' 
                            value={this.state.teamName} 
                            onChange={e => this.updateTeamName(e.target.value)}/>
                        <div className='selected-team'>              
                                {mappedTeam}
                        </div>
                        <button 
                            onClick={e => {
                                this.saveTeam()
                                this.props.resetTeam()
                                this.resetTeam()}}
                            >Save Team
                        </button>
                    </div>
                </div>  
                <div className='team-radar'>     
                    <Radar
                        data={data}
                        width={100}
                        height={28}
                        options={options}
                    />
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        champion: state.championInfo,
        championInfo: state.championStats,
        team: state.team
    }
}

export default connect (mapStateToProps, { championStats, addChampion, removeChampion, resetTeam })(TeamBuilder) 