import React from 'react';
import { Element } from 'react-scroll';
import {IconButton} from '@mui/material'
import {LinkedIn,Instagram} from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
            Email : <span>455Sanjaykumar@gmail.com</span>
            </p>
            <p>
            Whatsapp : <span>9080840660</span>
            </p>
          
          <div className='contact_icons'>
             <a href='https://www.linkedin.com/in/sanjay-kumar-641725227/'>
                <IconButton>
                 <LinkedIn />
                </IconButton>
             </a>

             <a href='https://www.instagram.com/sanjaypro1?igsh=MTdocXh3dXNuZmJ0ZA=='>
                <IconButton>
                 <Instagram />
                </IconButton>
             </a>

          </div>
        </div>

    </Element>
  
  )
}

export default Contact 