import {useParams} from "react-router-dom"
import Box from '../Components/Box/Box';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Equip from '../Components/Equip/Equip';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';
import Data from '../Data/logements.json';






function Annonce() {
  

  const id = useParams().id
 


  return (
  <>
    
      <div>
        <Caroussel imageCaroussel={Data[id].pictures}/>
        <InfoAppart 
        title={Data[id].title} 
        location={Data[id].location} 
        name={Data[id].host.name} 
        picture={Data[id].host.picture} 
        tags={Data[id].tags} 
        // key={Data[id]}
        />


      
        
   
        <div className='BoxxOrga'>
        <Box titre={"Description"} texte={Data[id].description}/>
        <Box titre={"Equipement"} texte={<Equip equipments={Data[id].equipments} key={Data[id].id}/>}/>
        </div>
      </div>
      
    
  </>

     
    )
  }
  
  export default Annonce