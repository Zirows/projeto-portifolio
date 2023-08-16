import React from 'react';
import './Apresentation.css';
import { Link } from 'react-scroll';
import Document from '../../assets/icon-document.svg'
import GitHub from '../../assets/icon-github.svg'
import Linkedin from '../../assets/icon-linkedin.svg'

function Apresentation() {
  return (
    <section className='apresentation-section main-container'>
        <div className='apresentation-container'>
            <p>Olá, eu sou o Gabriel</p>
            <p>Full Stack</p>
            <div className='text-content'>
              <p className='stroke-text'>Developer</p>
            </div>
            <div className='icons-container'>
                <Link><img src={ Linkedin } alt="" /></Link>
                <Link><img src={ GitHub } alt="" /></Link>
                <Link><img src={ Document } alt="" /></Link>
            </div>
        </div>
    </section>
  )
}

export default Apresentation;