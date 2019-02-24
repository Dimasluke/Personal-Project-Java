import React, { Component } from 'react';
import Navbar from '../Dashboard/Navbar/Navbar';
import axios from 'axios';
import './TeamBuilder.css';
import { Radar } from 'react-chartjs-2';
import { championStats } from '../../redux/reducer'
import { connect } from 'react-redux'

class TeamBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            champions: {},
            championSearch: ''
        }
    }

    foochampion = (e) => {
        axios.get(`/api/champions/${e}`).then(response => {
            console.log("Champion axios call-->", response.data)
            this.props.championStats(response.data[0])
        })
    }

    componentDidMount (){
        this.getChampions();
    }

    getChampions = async () => {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
        let { data } = await response.data;
        this.setState({
            champions: data
        })
    }

    render(){
        console.log(this.props)
        const { champions } = this.state
        const result = Object.values(champions).filter(champ => {
            return champ.id.toLowerCase().includes(this.state.championSearch)
        })

        let mappedChampions = result.map(e => {
            return (
                <div className='col-1 card champ-info shadow-sm p-1 bg-white rounded champion-card' key={e.id} id='champion-card'>
                    <button 
                          data-toggle="tooltip" 
                          data-placement="top"
                        className='champ-button' 
                        onClick={event => this.foochampion(e.id)}>
                      
                            <img 
                                className='card-img-top' 
                                src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${e.id}.png`} alt='...'/>   
                    </button>
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
                    data: [0, 
                            0, 
                            0, 
                            0, 
                            0]
                }
            ]
        };
        const options = {
            scale: {
                ticks: {
                    min: 0,
                    max: 100
                }        
            }
        };
        return (
            <div>
                <Navbar />
                <div>
                    <div className='container' id='champion-container'>
                        <form className='container champion-form'>
                            <div className="form-group champion-input">
                                <label className='input-label' for="formGroupExampleInput">Champion Search</label>
                                <input 
                                    type="text" 
                                    className="form-control " 
                                    placeholder="Enter name here..." 
                                    onChange={e => this.setState({ championSearch: e.target.value})} 
                                />
                            </div>
                        </form>
                        <div className='row champion-list'>
                            {mappedChampions}
                        </div>
                    </div>
                    
                    <div className='container team-radar '>
                    <h1>Team Radar</h1>
                            <Radar 
                            data={data}
                            width={70}
                            height={28}
                            options={options}
                            />
                    </div>
                    <div className='container hovered-champion'>
                        <div className='card mb-3'>
                            <div className='row no-gutters'>
                                <div className='col-md-4'>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${this.props.championInfo.id}.png`} />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <div className='card-title'>{this.props.championInfo.id}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        champion: state.championInfo,
        championInfo: state.championStats
    }
}

export default connect (mapStateToProps, { championStats })(TeamBuilder) 