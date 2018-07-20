import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/petmeet.svg'
import title from '../../assets/petmeet.png'
import './Nav.css'

export default function Nav() {
    return (
        <div className='nav'>
        <Link to='/animals'>
            <div className='home'>
                <img className='logo' src={logo} alt='' />
                <img className='title' src={title} alt='' />
            </div>
        </Link>
            <div className='nav-options'>
            <Link to='/past' style={{ textDecoration: 'none'}}>
                <h2 className='option'>past orders</h2>
            </Link>
            <Link to='/checkout' style={{ textDecoration: 'none'}}>
                <h2 className='option'>cart</h2>
            </Link>
            </div>
        </div>
    )
}