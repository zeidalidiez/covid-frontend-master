import React ,{useContext} from 'react'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import { Link, Redirect } from 'react-router-dom'

export default function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const userContext = useContext(UserContext)
    return (
      <div className='homePage-container'>
        {TokenService.hasAuthToken() ? <Redirect to="/homePage" /> : <></>}
        <section className='title'>
        <h1> Dogwalking</h1>
        <h3> Welcome to the next day dogwalking service!</h3>
        <h2> Demo credentials : demouser/demopassworD1! </h2>
        <p>
        We are a service to help people walk their dogs during these uneasy times of COVID. <br />
        Once logged in you'll be able to select from one of our walkers!
        Just select the name of the walker, pick your Service and Time, then check your profile.
        Your appointment will be updated! So Login or Sign up and we will take care of all of your dogwalks!!
         </p> 
          <div className='homePagebutton-container'>
            <button className='homePage-button'>
              <Link to="/Login">
                Login
              </Link>
            </button>
            <button className='homePage-button'>
              <Link to="/Register">
                Register
              </Link>
            </button>
          </div>
        </section>
      </div>
    )
}
