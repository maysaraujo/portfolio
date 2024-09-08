/* eslint-disable react/display-name */
import Button from '../Button/Button';
import Card from './Card';
import styles from './Project.module.css';

const Project = () => {
  return (
    <section id='projetos' className={styles.projectSection}>
      <div className='container'>
        <h2>Projetos</h2>
        <div className='svgLine'>
          <svg
            width='249'
            height='7'
            viewBox='0 0 249 7'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.728027 3H0.228027V4H0.728027V3ZM248.665 3.5L245.778 0.613249L242.891 3.5L245.778 6.38675L248.665 3.5ZM0.728027 4H245.778V3H0.728027V4Z'
              fill='#DF2BF1'
            />
          </svg>
        </div>
        <Card />
        <div className={styles.buttonContainer}>
          <a
            href='https://github.com/maysaraujo'
            target='_blank'
            rel='noreferrer'
          >
            <Button text='Ver mais projetos' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
