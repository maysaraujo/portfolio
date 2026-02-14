/* eslint-disable react/display-name */
import Card from './Card';
import styles from './Project.module.css';

const Project = () => {
  return (
    <section id='projetos' className={styles.projectSection}>
      <div className='container'>
        <h2 className='titleLine'>Projetos</h2>
        <Card />
        <div className={styles.buttonContainer}>
          <a
            aria-label='Ver mais projetos'
            href='https://github.com/maysaraujo'
            target='_blank'
            rel='noreferrer'
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Project;
