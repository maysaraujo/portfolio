import styles from './Project.module.css';
import DataProject from './data-project.json';
import Icon from '../../assets/link-external.svg';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      {DataProject.map((project) => (
        <div key={project.id} className={styles.card}>
          <div className={styles.titles}>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <h4>{project.description}</h4>
          </div>
          <div className={styles.items}>
            <div className={styles.descriptions}>
              <h4>Tecnologias:</h4>
              <p>{project.technologies}</p>
            </div>
            <div className={styles.link}>
              {project.link ? (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <img src={Icon} alt={project.iconAlt} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
