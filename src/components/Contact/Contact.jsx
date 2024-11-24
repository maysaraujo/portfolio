/* eslint-disable react/display-name */
import styles from './Contact.module.css';
import { TbMailFilled } from 'react-icons/tb';
import { IoLogoLinkedin } from 'react-icons/io';
import Curriculo from '../../assets/Curriculo.pdf';

const Contact = () => {
  return (
    <section id='contato' className={styles.contactSection}>
      <div className='container'>
        <h2>Contato</h2>
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
