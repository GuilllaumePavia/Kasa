import Card from '../Components/Card/Card';
import BanniereAccueil from '../Components/BanniereAccueil/BanniereAccueil';
import './Accueil.css';
import Data from '../Data/logements.json';
import React from "react";

function Accueil() {


  return (
  <div>
    <BanniereAccueil/>
    <div className='CardContainer'>
      <div className='CardsContainer'>
        {Data.map((element, index) => <Card 
        title={element.title} 
        photo={element.cover} 
        id={index} 
        key={element.id} 
        className="Card"/> 
        )  
      }
     </div>   
    </div>
  </div>
  )
}

export default Accueil