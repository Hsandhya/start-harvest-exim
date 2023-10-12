import React from 'react'
import './Navbar.css'
import {MailFilled,PhoneFilled,InstagramOutlined,FacebookFilled} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div>
        <header className='header-top'>
            <div className='topNav-left'>
            <div><PhoneFilled /> +91 7299915599</div>
            <div><MailFilled /> starharvest.contact@gmail.com</div>
            </div>
              <div className='topNav-right'>Follow Us:
              <a href="https://instagram.com/starharvestexim?igshid=MzRlODBiNWFlZA=="><InstagramOutlined /></a>
              <a href="https://www.facebook.com/Starharvestexim?mibextid=ZbWKwL"><FacebookFilled /></a>
              </div>
            <div>

            </div>
        </header>
        <header>
            <img className='logo' src="" alt="logo" />
            <nav>
                <ul className='nav_links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar