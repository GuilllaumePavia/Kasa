import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Chevron from './chevron.png';

const Accord = styled.div`
  max-width:400px;
  height:auto;
  border: 1px solid black;
  margin: 100px auto 0;
  border-radius: 3px;
  margin-bottom:20px;
`


const AccordVisible = styled.div`
  background:Blue;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
`

const Titre = styled.h2`
font-size: 20px;
color:pink;
`

const ImgChevron = styled.img`
  width:20%;
` 

const AccordToggle = styled.div`
font-size: 18px;
background: pink;

`


const Texte = styled.p`
margin: 0;
padding: 22px 15px;
pointer-events: none;
line-height: 1.3;
color:black;
`

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
    <Accord>
      <AccordVisible onClick={toggleState}>
     <Titre>dfghjkl</Titre>
     <ImgChevron src={Chevron} alt="chevron down" />
     </AccordVisible>
    

    <AccordToggle /*Soucis*/ref={refHeight}
    style={{height: toggle ? `${heightEl}`
    :"0px"}}>
      <Texte>dfghjk sdfghjklkjhg 
      dfghjk sdfghjklkjhg dfghjk 
      sdfghjklkjhg dfghjk sdfghjklkjhg 
      dfghjk sdfghjklkjhg dfghjk sdfghjklkjhg 
      dfghjk sdfghjklkjhg dfghjk sdfghjklkjhg 
      dfghjk sdfghjklkjhg dfgh fghjklkjh
      </Texte>
    </AccordToggle>
    </Accord>
  )
}

export default Accordeon