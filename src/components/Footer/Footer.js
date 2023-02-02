import { useLocation } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  const location = useLocation();
  const teamPage = '/about-project';
  return (
    <section className={`footer ${ location.pathname === teamPage ? 'footer__about-team' : ''}`}>
      <p className='footer-text'>Все материалы представленные на сайте исключительно с целью ознакомления читателями и
        не преследуют коммерческих целей или нарушение авторских прав</p>
    </section>
  );
}

export default Footer;
