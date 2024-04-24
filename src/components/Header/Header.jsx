/* eslint-disable react/prop-types */
import styles from './Header.module.css';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMiniBars3 } from 'react-icons/hi2';

const Header = ({
  aboutRef,
  apresentationRef,
  experienceRef,
  skillsRef,
  projectRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header>
      <div className='container'>
        <nav>
          <ul>
            <div className={styles.dev}>
              <li
                onClick={() =>
                  apresentationRef.current.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
                Maysa.dev
              </li>
            </div>
            <button className={styles.menuBtn} onClick={showMenu}>
              {isOpen ? <FaTimes /> : <HiMiniBars3 />}
            </button>
            <div className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`}>
              <li
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Sobre mim
              </li>
              <li
                onClick={() =>
                  experienceRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Experiências
              </li>
              <li
                onClick={() =>
                  skillsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Habilidades
              </li>
              <li
                onClick={() =>
                  projectRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Projetos
              </li>
              <li
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contato
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
