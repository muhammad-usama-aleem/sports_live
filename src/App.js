import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainSlider from './components/Main-slider/MainSlider';
import MainPage from './pages/MainPage/MainPage';
import SignInUp from './pages/Sign-In-Up/SignInUp';

import FootballPage from './components/Games/Football/FoorballPage';
import AmfootballPage from './components/Games/Amfootball/AmfootballPage';
import BaseballPage from './components/Games/Baseball/BaseballPage';
import BasketballPage from './components/Games/Basketball/BasketballPage';
import CricketPage from './components/Games/Cricket/CricketPage';
import HandballPage from './components/Games/Handball/HandballPage';
import IcehockeyPage from './components/Games/Icehockey/IcehockeyPage';
import MMAPage from './components/Games/MMA/MMAPage';
import TennisPage from './components/Games/Tennis/TennisPage';
import VolleyballPage from './components/Games/Volleyball/VolleyballPage';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainSlider />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Signinup" component={SignInUp} />
          <Route exact path="/Football" component={FootballPage} />
          <Route exact path="/Amfootball" component={AmfootballPage} />
          <Route exact path="/Baseball" component={BaseballPage} />
          <Route exact path="/Basketball" component={BasketballPage} />
          <Route exact path="/Cricket" component={CricketPage} />
          <Route exact path="/Handball" component={HandballPage} />
          <Route exact path="/Icehockey" component={IcehockeyPage} />
          <Route exact path="/MMA" component={MMAPage} />
          <Route exact path="/Tennis" component={TennisPage} />
          <Route exact path="/Volleyball" component={VolleyballPage} />
          <Route exact path="/boxing" component={TennisPage} />
          <Route exact path="/Rugby" component={AmfootballPage} />
          <Route exact path="/snooker" component={TennisPage} />
          <Route exact path="/table" component={VolleyballPage} />
          <Route exact path="/darts" component={TennisPage} />
          <Route exact path="/futsal" component={VolleyballPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
