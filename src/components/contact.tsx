import React from "react";
import {BsTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'



function Contact() {
    return (
      <div className="contact">
        <div style={{
            marginLeft:"15px"
        }}> 
         <h1>Contact</h1>
         <hr style={{
           width:"200px",
           marginLeft:"0"
          
         }}/>
         <p><AiOutlineMail/> tearteamoguy@gmail.com</p>
         <p><BsTelephoneFill/> +66 632503964</p>
         </div>

     
      </div>
    );
  }
  
export default Contact;
