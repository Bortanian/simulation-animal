import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AllAnimals.css'

export default class AllAnimals extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className='browse'>
                <div className='add'>
                    <Link to='/add' style={{ textDecoration: 'none' }}>
                        <h2 className='add-text'>+ add animal</h2>
                    </Link>
                </div>
                <div>
                    LIST OF ANIMALS FROM DB
                </div>
            </div>
        )
    }
}