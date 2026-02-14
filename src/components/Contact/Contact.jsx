/* eslint-disable react/display-name */
import styles from './Contact.module.css';
import { TbMailFilled } from 'react-icons/tb';
import { IoLogoLinkedin } from 'react-icons/io';
import Curriculo from '../../assets/Curriculo_BR.pdf';

const Contact = () => {
  return (
    <section id='contato' className={styles.contactSection}>
      <div className='container'>
        <h2 className='titleLine'>Contato</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <IoLogoLinkedin />
            </div>
            <div className={styles.textContainer}>
              <h3>LinkedIn</h3>
              <p>@maysaraujo</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <TbMailFilled />
            </div>
            <div className={styles.textContainer}>
              <h3>E-mail</h3>
              <p>maysaraujo.dev@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a href={Curriculo} download>
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
