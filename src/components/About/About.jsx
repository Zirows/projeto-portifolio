import React, { useState } from 'react'
import './About.css'

import Document from '../../assets/icon-document.svg';
import GitHub from '../../assets/icon-github.svg';
import Linkedin from '../../assets/icon-linkedin.svg';

import Curriculo from '../../assets/curriculo.pdf';

function About() {

  const [animate, setAnimate] = useState(false);

  const animateScroll = () => {
    setAnimate(true)
  }

  return (
    <section className='about-container main-container' onMouseEnter={animateScroll}>
        <h2>About <span>Me</span></h2>
        <div className="line-container">
            <div className={ animate === true ? 'about-l' : 'hidden'}>
                <div className='text-item'>
                    <p>Analise no front-end, identificando possíveis erros ou falhas de demandas feita por devs, documentação de todos os erros e resoluções encontradas, atuando com o jira para melhor organização.</p>
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
            <div className={ animate === true ? 'about-m' : 'hidden'}>
                <div className='pointer1'></div>
                <div className='pointer2'></div>
                <div className='pointer1'></div>
                <div className='pointer2'></div>
            </div>
            <div className={ animate === true ? 'about-r' : 'hidden'}>
                <div className='title-item'>
                    <h3>2021</h3>
                    <p>Estágiario em QA</p>
                    <span>Receiv</span>
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
                    <p>Após formado em front-end, começei back-end, que estou cursando atualmente, até o final de 2023 estarei formado em back-end e com conhecimento necessario para desenvolver uma aplicação inteira sozinho.</p>
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