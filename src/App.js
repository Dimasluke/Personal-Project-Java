import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Dashboard/Navbar/Navbar';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      champions: {}
    }
  }

  componentDidMount (){
    // this.savedChampions();
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
      champions: data
    })
  }

  render() {
    const { champions } = this.state
    const result = Object.values(champions)
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/champions' component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
