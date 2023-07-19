import IMG from '../assets/IMG.png'
import './Banniere.css';

function Banniere(props) {
  return (
    <div className='Ban-Accueil'>
      <h2 className='Ban-Accueil-Texte'>{props.title}</h2>
      <img src={props.img} alt="Photo de paysage" className='Ban-Accueil-Image' />   
    </div>
  )
}

export default Banniere