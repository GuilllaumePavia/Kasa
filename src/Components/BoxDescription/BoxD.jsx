import React, {useState, useRef, useEffect} from 'react';
import ChevronD from './chevronD.png';
import './BoxDe.css';



function Accordeon() {


  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle)
  }

  const refHeight = useRef();

  useEffect(() => {
    
   setHeightEl(`${refHeight.current.scrollHeight}px`)
  
  }, [])

  return (
    <div className='Accord-D'>
      <div className='AccordVisible-D' onClick={toggleState}>
     <p className='Titre-D'>Description</p> 
     <img className={toggle ?'ImgChevron-D-inverse' : 'ImgChevron-D'} src={ChevronD} alt="chevron down" />
     </div>
    

     <div ref={refHeight} 
    className={toggle ? `AccordToggle-D Animated-D` : `AccordToggle-D`} 
    style={{height: toggle ? `${heightEl}`
    :"0px"}}>
      <p className='Texte-D'>Bart, Thaï et Ladj s'ennuient. C'est le soir de Noël et pour eux, il n'est pas question de faire le pied de grue près d'un quelconque sapin. Ils décident de sortir en boîte. La fête tourne court et Bart est mis à la porte sans ménagement. Eve et Yasmine, deux jeunes filles esseulées, leur proposent de se rendre dans une vieille maison non loin d'ici. Après avoir dévalisé une station-service, le petit groupe est accueilli par le gardien des lieux, un vieux berger taciturne. Les propos sataniques qu'il tient n'amusent pas longtemps Bart et ses amis.
      </p>
    </div>
    </div>
  )
}

export default Accordeon