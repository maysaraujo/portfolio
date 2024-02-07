/* eslint-disable react/display-name */
import styles from './Experience.module.css';
import { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.experienceSection}>
      <div className='container'>
        <h2>Experiências</h2>
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
        <div className={styles.experienceContainer}>
          <div className={styles.cardContainer}>
            <h3>SPIN Tecnologia</h3>
          </div>
          <div className={styles.textContainer}>
            <h3>Estagiária Front-end</h3>
            <h4>SPIN Tecnologia</h4>
            <p>
              Atuei como estagiária de desenvolvimento Front-end, utilizando
              HTML, CSS, React.js e Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
