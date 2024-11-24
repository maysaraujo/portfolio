/* eslint-disable react/display-name */
import styles from './Experience.module.css';
import Slider from 'react-slick';
import '../../App.css';

const Experience = () => {
  let settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <section id='experiencias' className={styles.experienceSection}>
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
          <Slider {...settings}>
            <div>
              <div className={styles.cardContainer}>
                <div className={styles.titleContainer}>
                  <h3>Mkt4Edu / 4RevOps</h3>
                </div>

                <div className={styles.textContainer}>
                  <div>
                    <h3>Desenvolvedora Front-end</h3>
                    <p>Jan 2023 - atual</p>
                  </div>
                  <h4>Mkt4Edu / 4RevOps</h4>
                  <p>
                    Atuo como desenvolvedora Front-end, utilizando
                    principalmente HTML, CSS e JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.cardContainer}>
                <div className={styles.titleContainer}>
                  <h3>SPIN Tecnologia</h3>
                </div>

                <div className={styles.textContainer}>
                  <div>
                    <h3>Estagiária Front-end</h3>
                    <p>Ago 2022 - Jan 2023 (6 meses)</p>
                  </div>
                  <h4>SPIN Tecnologia</h4>
                  <p>
                    Atuei como estagiária de desenvolvimento Front-end,
                    utilizando HTML, CSS, React.js e Next.js.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Experience;
