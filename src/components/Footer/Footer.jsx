import './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <p>
          Copyright © {currentYear} <span>Maysa Araujo.</span> Todos os direitos
          reservados.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
