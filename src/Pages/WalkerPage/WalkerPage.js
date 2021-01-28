import React, { Component } from 'react'

import WalkerList from '../../Components/WalkerList/WalkerList'
import './WalkerPage.css'

export default class WalkerPage extends Component {

    render() {
        return (
            <div className='profile-container'>
                <section className='Walker-section'>

                    <h1>Pick Your Dog Walker</h1>
                    <p> We have a large team to accomodate you!</p>
                    <p>Our service provides you with a caring team,</p>
                    <p>Trusted Walkers, and hygienic COVID practices.</p>
                    <WalkerList />
                </section>
            </div>
        )
    }
}
