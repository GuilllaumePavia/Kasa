
import BoxD from '../Components/BoxDescription/BoxD';
import BoxE from '../Components/BoxEquipement/BoxE';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';

function Annonce() {
    return (
      <div>

        <h1>Annonce</h1>
        <Caroussel/>
        <div className='BoxxOrga'>
        <BoxD/>
        <BoxE/>
        </div>
      </div>
    )
  }
  
  export default Annonce