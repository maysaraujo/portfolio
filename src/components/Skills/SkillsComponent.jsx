import styles from './Skills.module.css';

const SkillsComponent = ({ iconSkill, nameSkill }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {iconSkill}
        <p>{nameSkill}</p>
      </div>
    </div>
  );
};

export default SkillsComponent;
