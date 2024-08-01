import styles from './Project.module.css';
import DataProject from './data-project.json';
import Icon from '../../assets/link-external.svg'

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      {DataProject.map((project) => (
        <div key={project.id} className={styles.card}>
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
          <div className={styles.link}>
            <a href={project.link} target='_blank' rel='noreferrer noopener'>
              <p>{project.paragraph}</p>
            </a>
            <a href={project.link} target='_blank' rel='noreferrer noopener'>
              <img src={Icon} alt={project.iconAlt} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
