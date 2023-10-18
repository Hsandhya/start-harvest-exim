import React from 'react'
import "./RouterComponent.css";
import {InstagramOutlined,FacebookFilled,MailFilled,PhoneFilled} from '@ant-design/icons'
import {MdLocationPin} from 'react-icons/md'
import line1 from "../assets/line.png";
import line2 from "../assets/line2.png";
import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";
import { notification } from "antd";


const RouterContactUs = () => {

  const [api, contextHolder] = notification.useNotification();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phnNumber, setPhnNumber] = useState('')
  const [message, setMessage] = useState('')

  const success = () => {
    api.open({
      type: "success",
      message: "Thanks for reaching us",
    });
  };

  const clear =()=>
  {
    setEmail('')
      setMessage('')
      setPhnNumber('')
      setName('')
  }

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( "service_bbothrv",
    "template_0skrxba",
    form.current,
    "UoRI0rA1tpPngVnFe")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      success()
      clear()
  };
  return (
    <>
    {contextHolder}
     <div className='router-main'>
     <div className="image-class" style={{ height: "100%" }}>
          <div className="inner-text">
            <div>
              <h2>CONTACT US</h2>
            </div>
          </div>
        </div>
    
    <div className="contact-main">
     
    <h3 style={{ textAlign: "center" }}>
          {"  "}
          <img alt='Star Harvest Exim logo' style={{ width: "15%" }} src={line2}/> Contact Us{" "}
          <img alt='Star Harvest Exim logo' style={{ width: "15%" }} src={line1}/>
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
               <form ref={form} onSubmit={sendEmail} >
      <input type="text" name="from_name" placeholder=" Your name" required value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="email" name="from_email" placeholder=" Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" name="from_phoneNumber" placeholder=" Phone Number" required value={phnNumber} onChange={(e) => setPhnNumber(e.target.value)} />
      <textarea name="message" rows="10" placeholder=" Message" required value={message} onChange={(e) => setMessage(e.target.value)}/>
      <div className="form-button">
      <button type="submit" >Submit</button>
      </div>
    </form>
                
               </div>



</div>
</div>
</>

  )
}

export default RouterContactUs