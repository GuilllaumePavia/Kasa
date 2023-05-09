import React from 'react'
import './InfoAppart.css';

export default function InfoAppart() {
  return (
    <div className='conteneur'>


       <div className='conteneur1'>
           <h2 className='appart-titre'>Appart, canal de l'ourcq</h2>
           <h4 className='appart-ville'>Rosa Parks</h4>
           <div className='appart-tag'>
                <p className='tag'>Urbain</p> <p className='tag'>Canal</p> <p className='tag'>Cosy</p>
           </div>

       </div>



       <div className='conteneur2'>
            <div className='appart-metro-photo'>
                <h4 className='appart-metro'>Paris 19e Crimée</h4>  <div className='appart-photo'>Photos</div>
            </div>
            <div className='appart-note'>
                <i className='appart-etoile'>Etoile</i><i className='appart-etoile'>Etoile</i><i className='appart-etoile'>Etoile</i><i className='appart-etoile'>Etoile</i><i className='appart-etoile'>Etoile</i>
            </div>
       </div>


    </div>
  )
}
