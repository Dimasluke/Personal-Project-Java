import React, { Component } from 'react';
import axios from 'axios';
import './Champion.css'
import Navbar from '../Dashboard/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectChampion, championStats } from '../../redux/reducer'

class Champion extends Component {
    constructor (props){
        super(props);
        this.state = {
          champions: {},
          savedChampions: [],
          championSearch: ''
        }
      }
    
    componentDidMount (){
        this.savedChampions();
        this.getChampions();
    }

    getChampions = async () => {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
        let { data } = await response.data;
        this.setState({
            champions: data
        })
    }

    savedChampions = async () => {
        const response = await axios.get('/api/savedChampions');
        let { data } = await response;
        this.setState({
            savedChampions: data
        })
    }

    render () {
        const { selectChampion, championStats } = this.props
        const { champions } = this.state
        const result = Object.values(champions).filter(champ => {
            return champ.id.toLowerCase().includes(this.state.championSearch)
        })
        let mappedChampions = result.map(e => {
            return (
                <div className='col-1 champion-card card champ-info shadow-sm p-3 mb-5 bg-white rounded' key={e.id}>
                    <img className='card-img-top' src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${e.id}.png`} alt='...'/>
                    <p className='card-title'>{e.name}</p>
                    <p className='card-text'>{e.title}</p>
                    <Link className='btn btn-primary ' to={`/champions/${e.id}`}>More Info</Link>
                </div>
            )
        })
        return (
            <div>
                <Navbar />
                <form className='container champion-form'>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Champion Search</label>
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
        )
    }
}

export default connect (null, {selectChampion, championStats})(Champion)