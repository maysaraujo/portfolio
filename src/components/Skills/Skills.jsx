/* eslint-disable react/display-name */
import SkillsComponent from './SkillsComponent';
import styles from './Skills.module.css';
import HtmlIcon from '../../assets/html-icon.svg';
import CssIcon from '../../assets/css-icon.svg';
import TailwindIcon from '../../assets/tailwind-css-icon.svg';
import SassIcon from '../../assets/sass-icon.svg';
import JavaScriptIcon from '../../assets/javascript-icon.svg';
import ReactIcon from '../../assets/react-icon.svg';
import HubSpotIcon from '../../assets/hubspot-icon.svg';
import GitIcon from '../../assets/git-icon.svg';

const Skills = () => {
  return (
    <section id='habilidades' className={styles.skillsSection}>
      <div className='container'>
        <h2>Habilidades</h2>
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
        <div className={styles.cardContainer}>
          <SkillsComponent image={HtmlIcon} alt='HTML Icon' />
          <SkillsComponent image={CssIcon} alt='CSS Icon' />
          <SkillsComponent image={TailwindIcon} alt='Tailwind CSS Icon' />
          <SkillsComponent image={SassIcon} alt='SASS Icon' />
          <SkillsComponent image={JavaScriptIcon} alt='JavaScript Icon' />
          <SkillsComponent image={ReactIcon} alt='React Icon' />
          <SkillsComponent image={HubSpotIcon} alt='HubSpot Icon' />
          <SkillsComponent image={GitIcon} alt='Git Icon' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
