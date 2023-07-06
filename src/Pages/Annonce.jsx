import {useParams, useNavigate, useEffect} from "react-router-dom"
import Box from '../Components/Box/Box';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Equip from '../Components/Equip/Equip';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';
import Data from '../Data/logements.json';
import Error from '../Components/Error/Error';
import {Navigate} from 'react-router-dom';


function Annonce() {
  

  const id = useParams().id
  console.log(id)


  return (

  <>

   {(id < 0 || id > 19) && <Navigate to="/Error" replace={true}/>}

   {(id >= 0 && id <= 19) && 
   
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
   <Box titre={"Equipement"} texte={<Equip equipments={Data[id].equipments} key={Data[id].id}/>}/>
   </div>
 </div> 
   
   }

      
  </>

    )
  }
  
  export default Annonce