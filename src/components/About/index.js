import React from 'react';
import avatar from '../../assets/avatarpicture.jpg';
import '../../style.css';

export default function About() {
  return (
    <div>
      
    <div class="profileimage">
    <img src={avatar} className='aboutimage' alt= "woman in the middle with her hair down and a black and gold sparkly scarf who is outside in front of red brick building." width="200px" height="200px"/> 
  </div>
    <h1 className='nametitle'>Alexandra Wiles</h1>
  
    <h3 className='nametitledesc'>Web Developer</h3>

    <p>Alex Wiles is a junior web developer currently going through class with Michigan State University for full stack development.
    </p>

    <p>Backgrounds in business office management at a skilled nursing facility and looking to expand into the tech field as a full stack developer. </p>
    </div>
  );
}
