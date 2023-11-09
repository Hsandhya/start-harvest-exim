import React from 'react'
import certificate1 from '../assets/STAR HARVEST EXIM - IEC_page-0001.jpg'
import certificate2 from '../assets/Udyam Registration Certificate_page-0001.jpg'
import certificate3 from '../assets/Udyam Registration Certificate_page-0002.jpg'
import certificate4 from '../assets/RCMC FIEO_page-0001.jpg'


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
        <img className='certificate-img' src={certificate1} alt='certificate'></img>
        <img className='certificate-img'src={certificate2} alt='certificate'></img>
        <img className='certificate-img' src={certificate3} alt='certificate'></img>
        <img className='certificate-img' src={certificate4} alt='certificate'></img>
       </div>
        
        </div>
    </div>
  )
}

export default Certificates