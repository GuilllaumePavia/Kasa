import React, {useState, useRef, useEffect} from 'react';
import ChevronAp from './chevronAp.png';
import './BoxApropos.css';



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
    <div className='Accord-Ap'>
      <div className='AccordVisible-Ap' onClick={toggleState}>
     <p className='Titre-Ap'>{props.titre}</p> 
     <img className={toggle ?'ImgChevron-Ap-inverse' : 'ImgChevron-Ap'} src={ChevronAp} alt="chevron down" />
     </div>
    

     <div ref={refHeight} 
    className={toggle ? `AccordToggle-Ap Animated-Ap` : `AccordToggle-Ap`} 
    style={{height: toggle ? `${heightEl}`
    :"0px"}}>
      <p className={toggle ? 'Texte-Ap Animated-Texte-Ap' : 'Texte-Ap'}>{props.txt}
      </p>
    </div>
    </div>
  )
}

export default Accordeon