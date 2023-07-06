import React, {useState} from 'react';
import chevronLeft from '../../Image/Icons/chevronLeft.png';
import chevronRight from '../../Image/Icons/chevronRight.png';
import './Caroussel.css';
import Data from '../../Data/logements.json';
import Fractionnel from '../Fractionnel/Fractionnel';
import {useParams} from "react-router-dom"

function Caroussel(props) {

  const id = useParams().id

  const [index, setIndex] = useState(0);
  console.log(index)

   const nextSlide = () => {
    setIndex(index + 1);
    if(index === props.imageCaroussel.length - 1){
      setIndex(0);
    }
  }
  
  const prevSlide = () => {
    setIndex(index - 1);
    if(index === 0){
      setIndex(props.imageCaroussel.length - 1);
    }
  };

  const displayArrow = Data[id].pictures.length > 1
 
  return (
<div className='caroussel'>
     <div 
     className='carousselShow'
     style = {{backgroundImage: `url(${props.imageCaroussel[index]})`}}>
      
    { displayArrow &&
    <>
      <img src={chevronLeft} alt="chevronLeft" className='btn-left' onClick={prevSlide}/>
      <img src={chevronRight} alt="chevronLeft" className='btn-right' onClick={nextSlide}/>
    </>}

   <div className='Compteur-orga'>
    <Fractionnel num={index + 1} length={Data[id].pictures.length}/>
    </div>
     </div>
      
     
</div>
)

}

export default Caroussel
