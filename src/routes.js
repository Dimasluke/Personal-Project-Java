import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Champion from './components/Champion/Champion';
import ChampionShow from './components/Champion/ChampionShow';
import UserSession from './components/Dashboard/UserSession/UserSession';
import UserRegister from './components/Dashboard/UserSession/UserRegister';
import TeamBuilder from './components/TeamBuilder/TeamBuilder';

export default (
    <Switch>
        <Route exact path='/userSession/register' component={UserRegister} />
        <Route exact path='/userSession' component={UserSession} />
        <Route exact path='/teamBuilder' component={TeamBuilder} />
        <Route exact path='/champions/:id' component={ChampionShow} />
        <Route exact path='/champions' component={Champion} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Landing} />
    </Switch>
)