/* eslint-disable react/prop-types */
import styles from './Header.module.css';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMiniBars3 } from 'react-icons/hi2';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((open) => !open);
  };

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header>
      <div className='container'>
        <nav>
          <Router>
            <ul>
              <div className={styles.dev}>
                <NavLink smooth to='#apresentacao'>
                  <li>Maysa.dev</li>
                </NavLink>
              </div>
              <button className={styles.menuBtn} onClick={showMenu}>
                {isOpen ? <FaTimes /> : <HiMiniBars3 />}
              </button>
              <div
                className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`}
              >
                <NavLink smooth to='#sobre' onClick={closeMenu}>
                  <li>Sobre mim</li>
                </NavLink>

                <NavLink smooth to='#experiencias' onClick={closeMenu}>
                  <li>Experiências</li>
                </NavLink>

                <NavLink smooth to='#habilidades' onClick={closeMenu}>
                  <li>Habilidades</li>
                </NavLink>

                <NavLink smooth to='#projetos' onClick={closeMenu}>
                  <li>Projetos</li>
                </NavLink>

                <NavLink smooth to='#contato' onClick={closeMenu}>
                  <li>Contato</li>
                </NavLink>
              </div>
            </ul>
          </Router>
        </nav>
      </div>
    </header>
  );
};

export default Header;
