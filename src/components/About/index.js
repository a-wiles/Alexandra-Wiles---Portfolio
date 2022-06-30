import React from 'react';
import avatar from '../../assets/avatarpicture.jpg';

export default function About() {
  return (
    <div>
      
    <div class="profileimage">
    <img src={avatar} className='image' alt= "woman in the middle with her hair down and a black and gold sparkly scarf who is outside in front of red brick building." width="200px" height="200px" /> 
  </div>
    <h1 className='nametitle'>Alexandra Wiles</h1>
  
    <h3 className='nametitledesc'>Web Developer</h3>

    <p>About me Blurb will be put here eventually</p>
    </div>
  );
}
