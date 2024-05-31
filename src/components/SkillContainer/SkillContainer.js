import React from 'react';
import { Element } from 'react-scroll';
import skilling from '../../assets/images/pexels-sora-shimazaki-5926393.jpg';
import './SkillContainer.css';
import LinearProgress from '@mui/material/LinearProgress';

 const  SkillContainer=()=> {
        return (
            <Element className='skillContainer' id='skills'>
                <div className='skillContainer_image'>
                    <img src={skilling} alt='sry' style={{ width: '500px'}}/>
                </div>

                <div className='skillContainer_text'>
                   <h2>SKILLSET</h2> 

                <div className='skillContainer_skillSet'>
                      <h2>REACT</h2>
                   <div className='skillContainer_slider skillContainer_slider1 '>
                    <LinearProgress variant='determinate' value={55}/>
                   </div>
                </div>

                <div className='skillContainer_skillSet'>
                     <h2>JAVA</h2>
                   <div className='skillContainer_slider skillContainer_slider2 '>
                    <LinearProgress variant='determinate' value={65}/>
                   </div>
                </div>

                <div className='skillContainer_skillSet'>
                     <h2>HTML</h2>
                  <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={70}/>
                  </div>
                </div>
               
                <div className='skillContainer_skillSet'>
                     <h2>CSS</h2>
                  <div className='skillContainer_slider skillContainer_slider4'>
                    <LinearProgress variant='determinate' value={55}/>
                  </div>
                </div>

                <div className='skillContainer_skillSet'>
                     <h2>SQL</h2>
                  <div className='skillContainer_slider skillContainer_slider5'>
                    <LinearProgress variant='determinate' value={50}/>
                  </div>
                </div>

                </div>

                
            </Element>
        )
    }

export default SkillContainer
