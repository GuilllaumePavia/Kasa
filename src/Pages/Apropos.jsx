import React from 'react'
import BanniereApropos from '../Components/BanniereApropos/BanniereApropos';
import BoxApropos from '../Components/BoxApropos/BoxApropos';
import './Apropos.css';

export default function Apropos() {
  return (
    <div>
      <BanniereApropos/>
      <div className='BoxApropos-Orga'>
      <BoxApropos titre={"Fiabilité"} txt={"Texte1"}/>
      <BoxApropos titre={"Respect"} txt={"Texte2"}/>
      <BoxApropos titre={"Service"} txt={"Texte3"}/>
      <BoxApropos titre={"Sécurité"} txt={"Texte4"}/>
     </div>
    </div>
  )
}
