import React, { Component } from 'react'
import './HomePage.css'

export default class Homepage extends Component {
    render() {
        return (
            <div className='homePage-container'>
                <section className='title'>
                    <h1>Vinyl Rock <br /> Walkershop</h1>
                    <h3> Welcome to Vinyl Rock Walkershop.</h3>
                    <p>
                        Where hair cutting comes easy
                        Vinyl Rock is all about taking the hassle out of getting your hair cut!<br />
                        Once logged in you'll be able to select from one of our walkers!
                        Just select the name of the walker, pick your Service and Time, then check your profile.
                        Your apointment will be updated! So Login or Sign up and never have to worry about your hair again!!!
                    </p>
                </section>
            </div>
        )
    }
}
