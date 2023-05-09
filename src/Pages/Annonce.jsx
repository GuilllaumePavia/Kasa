import Box from '../Components/Box/Box';
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
        <Box titre={"Description"} texte={"Texte1"}/>
        <Box titre={"Equipement"} texte={"Texte2"}/>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Annonce