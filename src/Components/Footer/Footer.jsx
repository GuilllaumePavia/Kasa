import picture from '../assets/picture.png'
import './Footer.css';

function Footer() {
  
  return (
   
    <div className='Footer'>
    <img className='LogoFooter' src={picture} />
      <p className='FooterTexte'>© 2020 Kasa. All rights reserved</p>
    </div>
  
  )
}

export default Footer