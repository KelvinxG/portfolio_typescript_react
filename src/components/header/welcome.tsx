import { url } from "inspector";
import React from "react";


function Welcome() {
    return (
      <div style={{
        textAlign:"center",
        padding: "10px",
        backgroundColor:"#255BD9",
        height:"350px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}>
        <div style={{
            textAlign:"center",
            marginTop:"100px"
        }}> 
         <h1>Hello visitors my name is Kelvin, Welcome to my portfolio</h1>
         <p>I am a software engineer/data analyst/data scientist.I have experiences in various kind of jobs</p>
         <p>
            <a style={{
            color:"black",
            textDecoration:'none',
            }} href="mailto: tearteamoguy@gmail.com">Get in touch</a></p>
         </div>
      </div>
    );
  }
  
  export default Welcome;
  