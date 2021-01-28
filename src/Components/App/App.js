import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import WalkerPage from '../../Pages/WalkerPage/WalkerPage'
import WalkerProfile from '../WalkerProfile/WalkerProfile'
import Footer from '../../Components/Footer/Footer'
import HomePage from '../../Pages/HomePage/HomePage'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import LandingPage from '../../Pages/LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage'
import ServiceMenuPage from '../../Pages/ServiceMenuPage/ServiceMenuPage'

import PrivateRoute from '../PrivateRoute/PrivateRoute'
import './App.css';

export default class App extends Component {
  state = {
    loading: true,
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
  };
  render() {
    return (
      <div className='main-container'>
        <header className='Nav-header'>
          <NavBar />
        </header>
        <main role='main' className='zeid-main'>
          {this.state.hasError && <p className='red'>There was an error!</p>}
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/homePage' component={HomePage} />
            < PrivateRoute exact path='/Walkers' component={WalkerPage} />
            <Route exact path='/WalkersProfile/:walkerid' component={WalkerProfile} />
            <Route exact path='/Login' component={LoginPage} />
            <PrivateRoute exact path='/Profile' component={ProfilePage} />
            <Route exact path='/Register' component={RegisterPage} />
            <Route exact path='/Service' component={ServiceMenuPage} />
          </Switch>
        </main>
        <footer >
          <Footer />
        </footer>
      </div>
    )
  }
}



