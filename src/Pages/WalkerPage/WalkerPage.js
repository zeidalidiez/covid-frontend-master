import React, { Component } from 'react'

import WalkerList from '../../Components/WalkerList/WalkerList'
import './WalkerPage.css'

export default class WalkerPage extends Component {

    render() {
        return (
            <div className='profile-container'>
                <section className='Walker-section'>

                    <h1>Pick Your Dog Walker</h1>
                    <p> Next day appointments only!</p>
                    <WalkerList />
                </section>
            </div>
        )
    }
}
