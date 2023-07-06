import { Link } from 'react-router-dom';
import Vector from '../../Image/Icons/Vector.png'
import './Header.css';


function Header() {
  return (
    <nav className='NavContainer'>
      <Link to="/" > 
        <img 
        src={Vector}
        alt="logo-kasa"
        className="logo-kasa"/>
       
      </Link>
      <div className='NavContainerCategories'>
        <Link className='LinkDecoration' to="/">Accueil</Link>
        <Link className='LinkDecoration'  to="/apropos">A propos</Link>
      </div>
    </nav>
  )
}

export default Header