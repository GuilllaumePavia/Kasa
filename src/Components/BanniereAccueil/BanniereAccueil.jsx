import IMG from '../assets/IMG.png'
import './BanniereAccueil.css';

function Banniere() {
  return (
    <div className='Ban-Accueil'>
      <h2 className='Ban-Accueil-Texte'>Chez vous, partout et ailleurs</h2>
      <img src={IMG} alt="Photo de paysage" className='Ban-Accueil-Image' />   
    </div>
  )
}

export default Banniere