import React from 'react';
import './Projects.css'

import ProjectGym from '../../assets/Project-gym.png';
import ProjectArq from '../../assets/project-arq.png'


function Projects() {
  return (
    <section className='projects-container main-container' id='projects'>
        <div>
            <h2 className='stroke-text'><span>Pr</span>ojects</h2>
            <p>Estes são alguns de meus projetos</p>
        </div>
        <div className='project-container'>
            <div>
                <a href='https://gymproject-8h1.pages.dev/' rel='noreferrer' target='_blank'><img src={ ProjectGym } alt="" /></a>
                <h3>Gym Project</h3>
                <p>Projeto desenvolvido com react</p>
            </div>
            <div>
                <a href='https://gabriel-marchese.github.io/site-arquitetura/' rel='noreferrer' target='_blank'><img src={ ProjectArq } alt="" /></a>
                <h3>Site Arquitetura</h3>
                <p>Projeto desenvolvido com html e css</p>
            </div>
        </div>
    </section>
  )
}

export default Projects