import React from 'react'
import './Contact.css'
import { Form,Input,Button } from 'antd'
import {InstagramOutlined,FacebookFilled,MailFilled,PhoneFilled} from '@ant-design/icons'
import {MdLocationPin} from 'react-icons/md'
import line1 from "../assets/line.png";
import line2 from "../assets/line2.png";

const Contact = () => {
  return (
    <>
    
    <div className="contact-main">
    <h3 style={{ textAlign: "center" }}>
          {"  "}
          <img style={{ width: "15%" }} src={line2} alt="" /> Contact Us{" "}
          <img style={{ width: "15%" }} src={line1} alt="" />
        </h3>
      <h2 style={{color:'green'}}>If You Have Any Query, Please Contact Us</h2>
      </div>
    <div className='co-wrapper' id='contact'>
    <div className="co-left">
        
      <h2 style={{color:'green'}}>Contact Details</h2>
                <ul>
                    <li>
                        <span>{<MdLocationPin/>} </span>
                        <span>58, Karpagam Avenue, 2nd street, <br/>
                            Raja Annamalaipuram,Chennai-600028</span>
                    </li>
                    <li>
                        <span>{<PhoneFilled/>} </span>
                        <span>+91-7299915599</span>
                    </li>
                    <li>
                        <span>{<MailFilled/>} </span>
                        <span>starharvest.contact@gmail.com</span>
                    </li>
                </ul>
               <div className='social-link'> 
            <a href="https://instagram.com/starharvestexim?igshid=MzRlODBiNWFlZA=="><InstagramOutlined /></a>
              <a href="https://www.facebook.com/Starharvestexim?mibextid=ZbWKwL"><FacebookFilled /></a>
              </div>

               
    </div>
    <div className="co-right">
               <h3 style={{color:'green'}}>GET IN TOUCH</h3>
                <Form>
                  <Form.Item>
                    <Input placeholder='Your Name'></Input>
                  </Form.Item>
                  
                  <Form.Item>
                    <Input placeholder='Subject'></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder='Email' type='email'></Input>
                  </Form.Item>
                  <Form.Item>
                <textarea placeholder='Message' name="" id="" cols="47" rows="10"></textarea>  
                </Form.Item>
                <div className='submit-button'>
                <Button style={{background:'green', color:'white'}}>Submit</Button>
                </div>
                </Form>
                
               </div>



</div>
</>

  )
}

export default Contact