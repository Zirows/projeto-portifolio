import React from 'react';
import './Projects.css'

import ProjectGym from '../../assets/Project-gym.png';
import ProjectArq from '../../assets/project-arq.png';
import ProjectJango from '../../assets/JavangoJango.png';
import ProjectFut from '../../assets/TrybeFutebolClub.png';


function Projects() {
  return (
    <section className='projects-container main-container' id='projects'>
        <div>
            <h2 className='stroke-text'><span>Pr</span>ojects</h2>
            <p>Estes são alguns de meus projetos</p>
        </div>
        <div className='project-container'>
            <div>
                <a href='https://github.com/gabriel-marchese/javango-jango' rel='noreferrer' target='_blank'><img src={ ProjectJango } alt="" /></a>
                <h3>FullStack</h3>
                <p>Javango Jango: Desenvolvido com React, Node e MySql</p>
            </div>
            <div>
                <a href='https://github.com/gabriel-marchese/gym-project' rel='noreferrer' target='_blank'><img src={ ProjectGym } alt="" /></a>
                <h3>Frontend</h3>
                <p>Gym Project: Desenvolvido com React</p>
            </div>
        </div>
        <div className='project-container'>
        <div>
                <a href='https://github.com/gabriel-marchese/table-futebol-project' rel='noreferrer' target='_blank'><img src={ ProjectFut } alt="" /></a>
                <h3>Backend</h3>
                <p>Futebol Club: Desenvolvido com React, Node e MySql</p>
            </div>
            <div>
                <a href='https://github.com/gabriel-marchese/site-arquitetura' rel='noreferrer' target='_blank'><img src={ ProjectArq } alt="" /></a>
                <h3>Frontend</h3>
                <p>Site Arquitetura: Desenvolvido com html e css</p>
            </div>
        </div>
    </section>
  )
}

export default Projects