import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { skillsData } from '../../data/skillsData';

function Skills() {

  const transition = {type: 'spring', duration: 3};

  const [selected, setSelected] = useState(0);
  const skLength = skillsData.length;
  const [hoverSelect, setHoverSelect] = useState(0)

  const leftArrowMove = () => {
    selected === 0
        ? setSelected(skLength -1)
        : setSelected((prev) => prev -1);
  }

  const rightArrowMove = () => {
    selected === skLength - 1
        ? setSelected(0)
        : setSelected((prev) => prev +1);
  }

  const hoverSelected = (i) => {
    setHoverSelect(i);

  }

  return (
    <section className='skills-container  main-container'>
        <div className='title-control'>
          <img src={ LeftArrow } onClick={leftArrowMove} alt="" />
          <motion.h1 className='skills-title'
          key={selected}
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{transition}}>{ skillsData[selected].title }<span className='stroke-text'>end</span></motion.h1>
          <img src={ RightArrow } onClick={rightArrowMove} alt="" />
        </div>
        <p>Tecnologias em que tenho conhecimento</p>
        <div className='skills'>
          <div>
            <div>
        <p className='hover-mouse-p'>Passe o mouse por cima 🖱️</p>
            <motion.div key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{transition}}>
              {
                skillsData[selected].skills.map((icon, i) => (
                  <img  className='skill-icon' onMouseOver={() => hoverSelected(i)} onMouseLeave={() => setHoverSelect(0)} key={i} src={icon.icon} alt="" />
                  ))
              }
            </motion.div>
            </div>
          </div>
          <aside>
            <div>
              <motion.h2
              key={selected}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: -100}}
              transition={{transition}}>
                {
                  skillsData[selected].skills[hoverSelect].title
                }
              </motion.h2>
              <motion.p
              key={selected +1}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: -100}}
              transition={{transition}}>
                {
                  skillsData[selected].skills[hoverSelect].description
                }
              </motion.p>
            </div>
          </aside>
        </div>
    </section>
  )
}

export default Skills;