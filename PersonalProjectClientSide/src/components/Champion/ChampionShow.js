import React, { Component } from 'react';
import Navbar from '../Dashboard/Navbar//Navbar';
import { connect } from 'react-redux';
import './ChampionShow.css';
import ChampionRadar from './ChampionRadar';
import { selectChampion, championStats } from '../../redux/reducer';
import axios from 'axios'

class ChampionShow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            picNum: 0
        }
    }

    componentDidMount () {
        axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json').then(response => {
            let { data } = response.data
            let x = Object.values(data).filter(champion => {
                return champion.id === this.props.match.params.id
            })
            console.log("selected champion -->", x)
            this.props.selectChampion(x[0])
            axios.get(`/api/champions/${x[0].id}`).then(response => {
                console.log("Champion axios call-->", response.data)
                this.props.championStats(response.data)
            })
        })
    }

    nextPic = () => {
        this.setState({
            picNum: this.state.picNum + 1
        })
    }

    prevPic = () => {
        this.setState({
            picNum: this.state.picNum - 1
        })
    }

    render () {
        const { picNum } = this.state;
        const { champion } = this.props
        const { championInfo } = this.props
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='card mb-3'>
                        <div className='row no-gutters'>
                            <div className='col-md-6 champ-image'>
                                <img  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${picNum}.jpg`} className='card-img champ-image' />

                            </div>
                            <div className='col-md-6'>
                                <div className='button-container'>                                 
                                    <button className='btn btn-primary show-button' onClick={this.nextPic}></button>                               
                                    <button className='btn btn-warning show-button' onClick={this.prevPic}></button>                                  
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>{champion.id}</h5>
                                    <p className='card-text'>{champion.blurb}</p>
                                    <ChampionRadar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container iframe-container shadow-sm'>
                    <iframe width='700' height='400' src={`https://www.youtube.com/embed/${championInfo.embedString}`}/>
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

export default connect(mapStateToProps, { selectChampion, championStats })(ChampionShow)