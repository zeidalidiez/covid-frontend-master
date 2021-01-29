import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Walker extends Component {

    render() {
        const { walker } = this.props
        return (
            <div className='Walker-wrapper'>
                <li>
                    <Link to={`/WalkersProfile/${walker.id}`}>
                        {walker.first_name}
                    </Link>
                    <h4>Available next day</h4>
                    <p>Next day @ 7 a.m</p>
                </li>
            </div>
        )
    }
}