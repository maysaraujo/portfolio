import styles from './About.module.css';

// eslint-disable-next-line react/display-name
const About = () => {
  return (
    <section id='sobre' className={styles.aboutSection}>
      <div className='container'>
        <h2>Sobre mim</h2>
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
        <div className={styles.textContainer}>
          <p>
            Desenvolvedora Front-end com experiência em JavaScript, React.js e
            consumo de APIs. Formada em Análise e Desenvolvimento de Sistemas,
            pela FATEC Mogi Mirim - Arthur de Azevedo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
