
import BoxD from '../Components/BoxDescription/BoxD';
import BoxE from '../Components/BoxEquipement/BoxE';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Caroussel from '../Components/Caroussel/Caroussel';
import Footer from '../Components/Footer/Footer';
import './Annonce.css';

function Annonce() {
    return (
      <div>
        <Caroussel/>
        <InfoAppart/>
        <div className='BoxxOrga'>
        <BoxD/>
        <BoxE/>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Annonce