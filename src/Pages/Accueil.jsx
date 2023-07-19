import Card from '../Components/Card/Card';
import Banniere from '../Components/Banniere/Banniere';
import IMG from '../Components/assets/IMG.png'
import './Accueil.css';
import Data from '../Data/logements.json';
import React from "react";

function Accueil() {


  return (
  <div>
    <Banniere
    title={"Chez vous, partout et ailleurs"}
    img={IMG}/>
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

