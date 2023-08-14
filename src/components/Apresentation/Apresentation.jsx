import React from 'react';
import './Apresentation.css';
import Person from '../../assets/programmer.svg';
import { Link } from 'react-scroll';
import Document from '../../assets/icon-document.svg'
import GitHub from '../../assets/icon-github.svg'
import Linkedin from '../../assets/icon-linkedin.svg'

function Apresentation() {
  return (
    <section className='apresentation-section main-container'>

        <div className='left-a'>
            <p>Olá, eu sou Gabriel Marchese</p>
            <p>Desenvolvedor <span>Full-Stack</span></p>
        </div>
        <div className='right-a'>
            <img src={ Person } alt="" />
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