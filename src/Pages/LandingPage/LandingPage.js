import React ,{useContext} from 'react'
import DemoCreds from '../../Components/DemoCreds/DemoCreds'
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
          <h1>Vinyl Rock <br /> Walkershop</h1>
          <h3> Welcome to Vinyl Rock Walkershop.</h3>
          <p>
            Where hair cutting comes easy
                        Vinyl Rock is all about taking the hassle out of getting your hair cut!<br />
            Once logged in you'll be able to select from one of our walkers!
            Just select the name of the walker, pick your Service and Time, then check your profile.
            Your appointment will be updated! So Login or Sign up and never have to worry about your hair again!!!
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
            <DemoCreds />
          </div>
        </section>
      </div>
    )
}
