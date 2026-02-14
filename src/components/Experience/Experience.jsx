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
        <h2 className='titleLine'>Experiências</h2>
        <div className={styles.experienceContainer}>
          <Slider {...settings}>
            <div>
              <div className={styles.cardContainer}>
                <div className={styles.titleContainer}>
                  <h3>Mkt4Edu / 4RevOps</h3>
                </div>

                <div className={styles.textContainer}>
                  <div>
                    <h3>Desenvolvedora de Software</h3>
                    <p>Jan 2023 - atual</p>
                  </div>
                  <h4>Mkt4Edu / 4RevOps</h4>
                  <p>
                    Atuo como Desenvolvedora de Software, contribuindo no
                    desenvolvimento de sistemas web, com foco em backend,
                    integrações entre sistemas, automações e regras de negócio.
                    Participo do desenvolvimento de APIs, fluxos de dados e
                    soluções escaláveis, além da construção de interfaces web
                    para consumo dessas APIs.
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
