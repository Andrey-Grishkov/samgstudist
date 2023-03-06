import { useLocation } from 'react-router-dom'
import './Footer.scss'
import Woman from '../../images/main__image-women.svg'
import logoGif from '../../images/gif-samgtudist.gif'

const Footer = () => {
  const location = useLocation();
  const teamPage = '/about-project';
  return (
    <section className={`footer ${ location.pathname === teamPage ? 'footer__about-team' : ''}`}>
      <img className={`${ location.pathname === teamPage ? 'footer__image_hiden' : 'footer__image'}`} src={Woman}/>
      <img className={`${ location.pathname === teamPage ? 'footer__gif_hiden' : 'footer__gif'}`} src={logoGif}/>
      <p className='footer-text'>Все материалы, представленные на сайте, носят исключительно информационный характер.
        Не преследуют коммерческие цели и нарушение авторских прав.</p>
    </section>
  );
}

export default Footer;
