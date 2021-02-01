import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'
import './HomePage.css'


export default class HomePage extends Component {
    static contextType = UserContext
    handleLogout = () => {
      this.context.processLogout()
    }
    render() {
        return (
            <div className='homePage-container'>
                <section className='title'>
                    <h1> Pandemic Dog Walking </h1>
                    <h3> Extended features may not work in Demo Mode.</h3>
                    <p>
                    We are a service to help people walk their dogs during these uneasy times of COVID. <br />
            Once logged in you'll be able to select from one of our walkers!
            Just select the name of the walker, pick your Service and Time, then check your profile.
            Your appointment will be updated! So Login or Sign up and we will take care of all of your dogwalks!!
                    </p>
                    <button className="homePage-button">
                <Link
                onClick={this.handleLogout}
                to="/">
                Logout
              </Link>
              </button>
                </section>
   
            </div>
        )
    }
}
