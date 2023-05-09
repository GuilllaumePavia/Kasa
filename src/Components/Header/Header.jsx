import { Link } from 'react-router-dom';
import picture from '../assets/picture.png'
import './Header.css';


function Header() {
  return (
    <nav className='NavContainer'>
      <Link to="/">
        <img className='HomeLogo' src={picture} />
      </Link>
      <div className='NavContainerCategories'>
        <Link className='LinkDecoration' to="/">Accueil</Link>
        <Link className='LinkDecoration'  to="/apropos">A propos</Link>
      </div>
    </nav>
  )
}

export default Header