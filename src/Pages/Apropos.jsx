import React from 'react'
import Box from '../Components/Box/Box';
import './Apropos.css';
import Banniere from '../Components/Banniere/Banniere';
import IMG2 from '../Components/assets/IMG2.png'

export default function Apropos() {
  return (
    <div>
      <Banniere img={IMG2}/>
      <div className='BoxApropos-Orga'>
      <Box titre={"Fiabilité"} largeur="70%" lchevron="5%" texte={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
      <Box titre={"Respect"} largeur="70%" lchevron="5%" texte={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
      <Box titre={"Service"} largeur="70%" lchevron="5%" texte={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
      <Box titre={"Sécurité"} largeur="70%" lchevron="5%" texte={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} />
     </div>
    </div>
  )
}
