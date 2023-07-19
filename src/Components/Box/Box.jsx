import React, {useState, useRef, useEffect} from 'react';
import Chevron from './chevron.png';
import './Box.css';



function Accordeon(props) {


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
    <div className='Accord'
    style={{width:props.largeur}}
    >
      <div className='AccordVisible' onClick={toggleState}>
     <p className='Titre'>{props.titre}</p> 
     <img className={toggle ?'ImgChevron' : 'ImgChevron-inverse'} src={Chevron} alt="chevron down" style={{width:props.lchevron}}/>
     </div>
    

     <div ref={refHeight} 
    className={toggle ? `AccordToggle Animated` : `AccordToggle`} 
    style={{height: toggle ? `${heightEl}`
    :"0px"}}>
      <div className={toggle ? 'Texte Animated-Texte' : 'Texte'}>{props.texte}
      </div>
    </div>
    </div>
  )
}

export default Accordeon