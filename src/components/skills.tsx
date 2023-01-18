import { findByLabelText } from "@testing-library/react";
import React from "react";
import {GoDatabase,GoCode} from 'react-icons/go'

function Myskills() {
    return (

      <div style={{marginTop:"50px",marginLeft:"15px"}}>
        <div style={{
                    marginTop:"15px",
                    // textAlign:"center",
                    backgroundColor:"#5F8C11",
                    // marginLeft:"50px",
                    // marginRight:"50px",
                    //height and width
                    width:"100%",
                    height:"100%",
                    
                    padding:"20px",
                    borderRadius:"20px",
                    float:"left",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
               
            
            
        }}>
         <h1>My skills, technologies,tools and environment</h1>
         <p>Python,Django,Flask,Typescript,React,Javascript,HTML,CSS,Bootstrap,Linux,ubuntu,CLI,RaspberryPi,Front-end development,Back-end development,Full stack develop,Docker</p>
         </div>  
         <div style={{     marginTop:"15px",
                    
                    backgroundColor:"#5F8C11",
                    // marginLeft:"50px",
                    // marginRight:"50px",
                    width:"50%",
                    padding:"20px",
                    borderRadius:"20px",
                    float:"right",
                    marginLeft:"15px",
                    height:"50%",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",

         }}>      
         <h1>Programming i generally use</h1>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
        </div>
                
      </div>
     
    );
  }
  
export default Myskills;
