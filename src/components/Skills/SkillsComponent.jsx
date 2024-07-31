import styles from './Skills.module.css';

const SkillsComponent = ({ image, alt }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default SkillsComponent;
