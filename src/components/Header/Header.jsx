import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header>
        <div class="header-container">
            <a href="#home" id="logo">‹GM/›</a>
            <nav>
                <ul>
                    <li><Link to="#home" spy={true} smooth={true}>Home</Link></li>
                    <li><Link to="#about">Sobre</Link></li>
                    <li><Link to="#project">Projetos</Link></li>
                    <li><Link to="#skills">Habilidades</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;