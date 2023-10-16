import React from 'react'
import certificate from '../assets/certificate.jpg'
import '../Certificates/certificates.css'

const Certificates = () => {
  return (
    <div>
      <div className='router-main'>
     <div className="image-class" style={{ height: "100%" }}>
          <div className="inner-text">
            <div>
              <h2>CERTIFICATIONS</h2>
            </div>
          </div>
        </div>
       <div className='certificate'>
        <img src={certificate} alt='certificate'></img>
       </div>
        
        </div>
    </div>
  )
}

export default Certificates