import React from 'react'
import "./StarRating.css"
import Pleine from "./etoile-pleine.png"
import Vide from "./etoile-vide.png"


export default function StarRating(props) {

   const etoiles = []

  for (let i = 1; i<= 5; i++) {
       if (i<=props.rate ) {
        etoiles.push(<img src={Pleine} alt="étoile pleine" key={i}/>) 
       }
       else {
        etoiles.push(<img src={Vide} alt="étoile vide" key={i}/>)
       }
   }

  
  return ( 
    <div>{etoiles}</div>
  )
}
