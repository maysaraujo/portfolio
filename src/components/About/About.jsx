import styles from './About.module.css';

// eslint-disable-next-line react/display-name
const About = () => {
  return (
    <section id='sobre' className={styles.aboutSection}>
      <div className='container'>
        <h2 className='titleLine'>Sobre mim</h2>
        <div className={styles.textContainer}>
          <p>
            Sou Desenvolvedora de Software, formada em Análise e Desenvolvimento
            de Sistemas pela FATEC e pós-graduanda em Engenharia de Software
            pela PUC Minas. Atuo no desenvolvimento de sistemas, APIs e regras
            de negócio, com experiência em Node.js, NestJS, integração entre
            sistemas e automações. Trabalho na construção de soluções
            escaláveis, bem estruturadas e orientadas a boas práticas de
            engenharia de software. Também possuo experiência em Front-end com
            React, utilizando o front-end como camada de consumo de APIs e
            suporte à experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
