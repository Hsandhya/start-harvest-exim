import { useNavigate } from 'react-router-dom'
import React from 'react'
import './About.css'
import aboutImage from '../assets/About.png'
import line from '../assets/line.png'
import icon1 from '../assets/icons8-ok-64.png'
import icon2 from '../assets/icons8-binoculars-64.png'
import { Button } from 'antd'



const About = () => {
  
  const navigate =useNavigate();
  const exploreClick =()=>{
    navigate('/products')

  }
  return (
    <div className='about-main'>
      <div className='left-pane'>

          <img className='about-image' src={aboutImage} alt='star harvest about'/>
      </div>
      <div className='right-pane'>
        <h4>About Us <img style={{width:'8%'}} src={line} alt='star harvest about'/></h4>
        <h2>Know About Our Exports & Imports</h2>
          <p>
          At Star Harvest Exim, we believe in the power of global connections, the authenticity of quality products, and the satisfaction of our clients. Established in 2023, our journey in the import and export industry has been marked by dedication, integrity, and a relentless pursuit of excellence.
          </p>
          <div style={{display:'flex'}}>
            <div>
            <img src={icon1} alt='star harvest icon'/>
            <h4>Product Quality</h4>
            <p style={{color:'green'}}>We can assure you about the Quality of the products in excellence</p>
          </div>
          <div>
            <img alt='Star Harvest Exim logo' src={icon2}/>
            <h4>Dedicated Services</h4>
            <p style={{paddingRight:'20px',color:'green'}}>We ensure that providing the best and premium services</p>
          </div>
          </div>
          <div className='about-button'>
            <Button onClick={exploreClick} style={{background:'green',color:'white',width:'10rem'}}>Explore now</Button>
          </div>
      </div>

    </div>
  )
}

export default About