import {useParams, useState} from "react-router-dom"
import Box from '../Components/Box/Box';
import InfoAppart from '../Components/InfoAppart/InfoAppart';
import Caroussel from '../Components/Caroussel/Caroussel';
import './Annonce.css';
import Data from '../Data/logements.json';
import {Navigate} from 'react-router-dom';


function Annonce() {
  
  const id = useParams().id

  // const WidthPage  = {style:{width:"800px"}}


  // const WidthPage2 = parseInt(WidthPage.style.width) > 800;
  
  
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

  <div className='Box-Orga-Desktop'>
    <Box titre={"Description"} texte={Data[id].description} largeur="35%" lchevron="7%"/>
    <Box titre={"Equipements"} texte={Data[id].equipments.map((equipment, index) => (
    <div key={index}>{equipment}</div>))} lchevron="7%" largeur="35%"/> 
 
  </div>

  <div className='Box-Orga-Responsive'>
   <Box titre={"Description"} texte={Data[id].description} largeur="90%" lchevron="7%"/>
   <Box titre={"Equipements"} texte={Data[id].equipments.map((equipment, index) => (
   <div key={index}>{equipment}</div>))} lchevron="7%" largeur="90%"/> 
  </div>
</div>  
  }  
 </>

)}
  
  export default Annonce