/* eslint-disable react/prop-types */
import styles from './Header.module.css';

const Header = ({
  aboutRef,
  apresentationRef,
  experienceRef,
  skillsRef,
  projectRef,
  contactRef,
}) => {
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
            <div className={styles.menu}>
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
