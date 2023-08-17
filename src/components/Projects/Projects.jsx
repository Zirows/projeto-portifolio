import React from 'react';
import { Link } from 'react-scroll';
import './Projects.css'

import ProjectGym from '../../assets/project-gym.png';

function Projects() {
  return (
    <section className='projects-container main-container'>
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
                <Link><img src={ ProjectGym } alt="" /></Link>
                <h3>Gym Project</h3>
                <p>Projeto desenvolvido com react</p>
            </div>
        </div>
    </section>
  )
}

export default Projects