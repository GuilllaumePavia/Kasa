import { Link } from 'react-router-dom';
import Vector from './Vector-1.png'
import './Footer.css';

function Footer() {
  
  return (
   
    <div className='Footer'>
      <Link>
    <img className='LogoFooter' src={Vector} alt="Logo de Kasa" />
    </Link>
      <p className='FooterTexte'>© 2020 Kasa. All rights reserved</p>
    </div>
  
  )
}

export default Footer