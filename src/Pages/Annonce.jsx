import {useParams} from "react-router-dom"
import Box from '../Components/Box/Box';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';
import Data from '../Data/logements.json';
import {Navigate} from 'react-router-dom';


function Annonce() {
  

  const id = useParams().id
  console.log(id)



  return (

  <>


{(id < 0 || id >= Data.length) &&  <Navigate to="/Error" replace={true}/>}
{(id >= 0 && id < Data.length) && 

   
   <div>
   <Caroussel imageCaroussel={Data[id].pictures}/>
   <InfoAppart 
   title={Data[id].title} 
   location={Data[id].location} 
   name={Data[id].host.name} 
   picture={Data[id].host.picture} 
   tags={Data[id].tags} 
   />

   <div className='BoxxOrga'>
   <Box titre={"Description"} texte={Data[id].description}/>
   <Box titre={"Equipement"} texte={Data[id].equipments.map((equipment, index) => (
   <div  key={index} >{equipment}</div>))}
   className='Equipment-Orga'/> 
   

   </div>
 </div> 
  
   }

      
  </>

    )
  }
  
  export default Annonce