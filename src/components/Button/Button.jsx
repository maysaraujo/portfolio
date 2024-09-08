import styles from './Button.module.css';

const Button = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
