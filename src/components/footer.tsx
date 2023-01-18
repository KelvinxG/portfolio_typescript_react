import React from "react";
import {GoMarkGithub} from 'react-icons/go'
import {BsTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'

const KelvinxG="https://github.com/kelvinxG";
function Footer() {

    return (
      <div style={{
        color:"white",
        backgroundColor:"black",
        width:"100%",
      
      }}>
        <p style={{marginBottom:'15px'}}> <AiOutlineMail size="20px"/>  tearteamoguy@gmail.com</p>
         <p><BsTelephoneFill size="20px"/> +66 632503964</p>
        <p style={{
    
          marginTop:'15px',
      }}> <GoMarkGithub size="20px"/> <a  style={{

       marginTop:'50px'
      }}href={KelvinxG}>KelvinxG</a></p>
          
      </div>
    );
  }
  
export default Footer;
