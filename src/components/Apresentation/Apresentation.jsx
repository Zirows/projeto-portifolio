import React from 'react';
import './Apresentation.css';
import Document from '../../assets/icon-document.svg'
import GitHub from '../../assets/icon-github.svg'
import Linkedin from '../../assets/icon-linkedin.svg'
import Curriculo from '../../assets/curriculo.pdf';

function Apresentation() {
  return (
    <section className='apresentation-section main-container' id='home'>
        <div className='apresentation-container'>
            <p>Olá, eu sou o Gabriel</p>
            <p>Full Stack</p>
            <div className='text-content'>
              <p className='stroke-text'>Developer</p>
            </div>
            <div className='icons-container'>
                <a href='https://www.linkedin.com/in/gabriel-marchese/' rel='noreferrer' target='_blank'><img src={ Linkedin } alt="" /></a>
                <a href='https://github.com/gabriel-marchese' rel='noreferrer' target='_blank'><img src={ GitHub } alt="" /></a>
                <a href={ Curriculo } rel='noreferrer' download target='_blank'><img src={ Document } alt="" /></a>
            </div>
        </div>
    </section>
  )
}

export default Apresentation;