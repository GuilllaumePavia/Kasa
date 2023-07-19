import { Link, useLocation } from 'react-router-dom';
import Vector from '../../Image/Icons/Vector.png'
import './Header.css';


function Header() {

  const location = useLocation();

  // const [page, setPage] = useState(false);

  // const pageState = () => {
  //   setPage 
  // }

  return (
    <nav className='NavContainer'>
      <Link to="/" > 
        <img 
        src={Vector}
        alt="logo-kasa"
        className="logo-kasa"/> 
      </Link>

      <div className='NavContainerCategories'>
        <Link className={location.pathname === "/" ? 'LinkDecoration' : ''}
         to="/">Accueil </Link>
        <Link className={location.pathname === "/apropos" ? 'LinkDecoration': ''}
        to="/apropos">A propos</Link>
      </div>
    </nav>
  )
}

export default Header






