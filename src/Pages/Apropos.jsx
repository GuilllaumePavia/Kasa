import React from 'react'
import BoxApropos from '../Components/BoxApropos/BoxApropos';
import './Apropos.css';
import Banniere from '../Components/Banniere/Banniere';
import IMG2 from '../Components/assets/IMG2.png'

export default function Apropos() {
  return (
    <div>
      <Banniere
    img={IMG2}/>
      <div className='BoxApropos-Orga'>
      <BoxApropos titre={"Fiabilité"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item active"/>
      <BoxApropos titre={"Respect"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
      <BoxApropos titre={"Service"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
      <BoxApropos titre={"Sécurité"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
     </div>
    </div>
  )
}
