import React, {useState} from 'react';
import chevronLeft from '../../Image/Icons/chevronLeft.png';
import chevronRight from '../../Image/Icons/chevronRight.png';
import img1 from '../../Image/Images/img1.jpg';
import img2 from '../../Image/Images/img2.jpg';
import img3 from '../../Image/Images/img3.jpg';
import img4 from '../../Image/Images/img4.jpg';
import './Caroussel.css';

function Caroussel() {

  const [index, setIndex] = useState(0);

  const imageCaroussel = [
    img1,
    img2,
    img3,
    img4
  ];

  const nextSlide = () => {
    setIndex(index + 1);
    if(index === imageCaroussel.lenght - 1){
      setIndex(0);
    }
  }

  const prevSlide = () => {
    setIndex(index - 1);
    if(index === 0){
      setIndex(imageCaroussel.lenght - 1);
    }
  };
  
  return (
<div className='caroussel'>
     <div 
     className='carousselShow'
     style = {{backgroundImage: `url(${imageCaroussel[index]})`}}>
      <img 
      src={chevronLeft} 
      alt="chevronLeft" 
      className='btn-left'
      onClick={prevSlide}/>
      <img 
      src={chevronRight} 
      alt="chevronLeft"
      className='btn-right' 
      onClick={nextSlide}/>
     </div>
</div>
)

}

export default Caroussel
