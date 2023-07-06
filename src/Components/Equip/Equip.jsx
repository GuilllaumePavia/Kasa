import React from 'react'
import './Equip.css';


export default function Equip(props) {
  return (

    <div>
      {props.equipments.map((equipment, element) => <div className='equip' key={element}>{equipment}</div>)}
      </div>
  )
}
