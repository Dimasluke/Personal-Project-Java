import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      champions: []
    }
  }

  componentDidMount (){
    this.savedChampions();
    // this.getChampions();
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
      champions: data
    })
  }

  render() {
    let mappedChampions = this.state.champions.map(e => {
      return (
        <div key={e.id}>
          {e.name} - <img src={e.img} />
        </div>
      )
    })
    console.log(this.state.champions)
    return (
      // <Switch>
      //   <Route exact path='/' render={() =>{
      //     return <Landing />
      //   }} />
      // </Switch>
      <div>
        {mappedChampions}
      </div>
    );
  }
}

export default App;
