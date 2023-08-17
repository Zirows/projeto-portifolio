import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

import menuIcon from '../../assets/icon-menu.svg'

function Header() {

  const mobile = window.innerWidth<=768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
        <div class="header-container">
            <a href="#home" id="logo">‹GM/›</a>
            {
              (menuOpened === false && mobile === true) ?
              ( <div className='content-burguer' onClick={() => setMenuOpened(true)}><img className='buguer-menu' src={ menuIcon } alt="" /></div> ) :
              (
                <nav>
                  <ul className='header-menu'>
                      <li><Link onClick={() => setMenuOpened(false)} to="home" spy={true} smooth={true}>Home</Link></li>
                      <li><Link onClick={() => setMenuOpened(false)} to="skills" spy={true} smooth={true}>Habilidades</Link></li>
                      <li><Link onClick={() => setMenuOpened(false)} to="projects" spy={true} smooth={true}>Projetos</Link></li>
                      <li><Link onClick={() => setMenuOpened(false)} to="about" spy={true} smooth={true}>Sobre</Link></li>
                  </ul>
                </nav>
              )
            }
        </div>
    </header>
  )
}

export default Header;