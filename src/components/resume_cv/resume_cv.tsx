import { hover } from '@testing-library/user-event/dist/hover';
import React,{Component} from 'react';

import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';



function MYRESUME(){
  

    return (
        <div style={{
            backgroundColor:'#D9563B',
            textAlign:'center',
            marginLeft:'15px',
            marginRight:'15px',
            padding: '20px',
            borderRadius:'20px',
            marginTop:'15px',


            
        }}>
            <h1>See my introduction (in details)</h1> <a href="https://docs.google.com/document/d/1qbZCex_2z08eC6vAGfGBAVXZUm7RD_lZ8agTxNpTmKk/edit?usp=sharing"><AiFillEye className='icon' size='30px' color='white'/></a>
            <h1>See my resume (in details)</h1> <a href="https://docs.google.com/document/d/1qbZCex_2z08eC6vAGfGBAVXZUm7RD_lZ8agTxNpTmKk/edit?usp=sharing"><AiFillEye className='icon' size='30px' color='white'/></a>
     
        </div>
    )
}

export default MYRESUME;