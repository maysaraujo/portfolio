/* eslint-disable react/prop-types */
import styles from './Header.module.css';
import { useRef, useState } from 'react';
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
  // const menuRef = useRef();

  // const showMenu = () => {
  //   menuRef.current.classList.toggle('responsiveMenu');
  // };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
            <div className={`${styles.menu} ${isOpen ? 'responsiveMenu' : ''}`}>
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
            <button
              className={styles.menuBtn}
              onClick={toggleNavbar}
            >
              {isOpen ? <FaTimes /> : <HiMiniBars3 />}
            </button>
            {/* <button
                className={`${styles.menuBtn} ${styles.closeBtn}`}
                onClick={showMenu}
              >
                <FaTimes />
              </button>
            <button className={styles.menuBtn} onClick={showMenu}>
              <HiMiniBars3 />
            </button> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
