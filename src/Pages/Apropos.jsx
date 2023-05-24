import React from 'react'
import BanniereApropos from '../Components/BanniereApropos/BanniereApropos';
import BoxApropos from '../Components/BoxApropos/BoxApropos';
import Footer from '../Components/Footer/Footer';
import './Apropos.css';

export default function Apropos() {
  return (
    <div>
      <BanniereApropos/>
      <div className='BoxApropos-Orga'>
      <BoxApropos titre={"Fiabilité"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemen t discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item active"/>
      <BoxApropos titre={"Respect"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemen t discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
      <BoxApropos titre={"Service"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemen t discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
      <BoxApropos titre={"Sécurité"} txt={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemen t discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."} className="Item"/>
     <Footer/>
     </div>
    </div>
  )
}
