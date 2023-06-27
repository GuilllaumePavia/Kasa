import './BanniereApropos.css';
import IMG2 from '../assets/IMG2.png'




function BanniereApropos() {
  return (
    <div className='Ban-Apropos'>
      <h2 className='Ban-Apropos-Texte'>Chez vous, partout et ailleurs</h2>
      <img src={IMG2} alt="Paysage de montagne" className='Ban-Apropos-Image' />
    </div>
  )
}

export default BanniereApropos