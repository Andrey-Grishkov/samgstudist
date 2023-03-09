import { useLocation } from 'react-router-dom'
import './Footer.scss'
import Woman from '../../images/main__image-women.svg'
import logoGif from '../../images/gif-samgtudist.gif'

const Footer = () => {
  const location = useLocation();
  const mainPage = '/';
  const teamPage = '/about-project';

  return (
    <section className={`footer ${ location.pathname === teamPage ? 'footer__about-team' : ''}`}>
      <img className={`${ location.pathname === mainPage ? 'footer__image' : 'footer__image_hiden'}`} src={Woman}/>
      <img className={`${ location.pathname === mainPage ? 'footer__gif' : 'footer__gif_hiden'}`} src={logoGif}/>
      <p className='footer-text'>Все материалы, представленные на сайте, носят исключительно информационный характер.
        Не преследуют коммерческие цели и нарушение авторских прав.</p>
    </section>
  );
}

export default Footer;
