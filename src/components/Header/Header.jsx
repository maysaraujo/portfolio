import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav>
          <ul>
            <div className={styles.dev}>
              <li>Maysa.dev</li>
            </div>
            <div className={styles.menu}>
              <li>Sobre mim</li>
              <li>Experiências</li>
              <li>Habilidades</li>
              <li>Meus projetos</li>
              <li>Contato</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
