import React, { useState } from 'react'
import './About.css'

import Document from '../../assets/icon-document.svg';
import GitHub from '../../assets/icon-github.svg';
import Linkedin from '../../assets/icon-linkedin.svg';

import Curriculo from '../../assets/curriculo.pdf';

function About() {

  const [animate, setAnimate] = useState(true);

  const mobile = window.innerWidth<=768 ? false : true;

  const animateScroll = () => {
    setAnimate(false)
  }

  return (
    <section className='about-container main-container' onMouseEnter={animateScroll} id="about">
        <h2>About <span>Me</span></h2>
        <div className="line-container">
            <div className={ (animate === true && mobile === true) ? 'hidden' : 'about-l'}>
                <div className='text-item'>
                    <p>Olá, meu nome é Gabriel, tenho 23 anos sou formado em engenharia mecatrônica, mas durante a faculdade conhecia programação e decidi que gostaria de trabalhar com isso pois é algo que amo.</p>
                </div>
                <div className='title-item'>
                    <h3>2022</h3>
                    <p>Engenharia</p>
                    <p>Mecatrônica</p>
                    <span>Fiap</span>
                </div>
                <div className='text-item'>
                    <p>Mas, foi em 2023 que realmente resolvi investir nesta carreira de desenvolvedor, começei um curso de desenvolvedor web pela trybe de 1 ano, e me formei em front-end.</p>
                </div>
                <div className='title-item'>
                    <h3>2023</h3>
                    <p>Back-end</p>
                    <span>Trybe</span>
                </div>
            </div>
            <div className={ (animate === true && mobile === true) ? 'hidden' : 'about-m' }>
                <div className='pointer1'></div>
                <div className='pointer2'></div>
                <div className='pointer1'></div>
                <div className='pointer2'></div>
            </div>
            <div className={ (animate === true && mobile === true) ? 'hidden' : 'about-r' }>
                <div className='title-item'>
                    <h3>2000</h3>
                    <p>Gabriel Marchese</p>
                    <span>Desenvolvedor FullStack</span>
                </div>
                <div className='text-item'>
                    <p>Em 2022 me formei em Engenharia Mecatrônica, porém durante a faculdade descobri a programação e foi ae que resolvi que iria seguir isso como carreira.</p>
                </div>
                <div className='title-item'>
                    <h3>2023</h3>
                    <p>Front-end</p>
                    <span>Trybe</span>
                </div>
                <div className='text-item'>
                    <p>Me formei em backend pela Trybe no final de 2023, usando como principais tecnologias de desenvolvimento o Node.js, TypeScript e o Mysql. Assim como conhecimento sobre testes unitários e de integração com Mocha e Chai.</p>
                </div>
            </div>
        </div>
        <div className='icon-container'>
            <div><a href='https://www.linkedin.com/in/gabriel-marchese/' rel='noreferrer' target='_blank'><img src={ Linkedin } alt="" /></a><p>Linkedin</p></div>
            <div><a href='https://github.com/gabriel-marchese' rel='noreferrer' target='_blank'><img src={ GitHub } alt="" /></a><p>GitHub</p></div>
            <div><a href={ Curriculo } rel='noreferrer' download target='_blank'><img src={ Document } alt="" /></a><p>Currículo</p></div>
        </div>
    </section>
  )
}

export default About