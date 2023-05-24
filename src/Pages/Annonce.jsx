import {useParams} from "react-router-dom"
import Box from '../Components/Box/Box';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Equip from '../Components/Equip/Equip';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';
import Data from '../Data/logements.json';
import Error from '../Components/Error/Error';

function Annonce() {
  

  const id = useParams().id


    return (
      <>
      {
      (id > (Data.length -1) || id < 0 ) ? <Error/> :
       <div>
        <Caroussel imageCaroussel={Data[id].pictures}/>
        <InfoAppart title={Data[id].title} location={Data[id].location} name={Data[id].host.name} picture={Data[id].host.picture} tags={Data[id].tags} rate={Data[id].rating}/>
        

        <div className='BoxxOrga'>
        <Box titre={"Description"} texte={Data[id].description}/>
       {/* {Data[id].equipments.map(() => <Box titre={"Equipement"} texte={Data[id].equipments}/>
       )} */}
       <Box titre={"Equipement"} texte={<Equip equipments={Data[id].equipments}/>}/>
       
        </div>
      </div>
      }
      </>
     
    )
  }
  
  export default Annonce