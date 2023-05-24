import React from 'react'
import './Fractionnel.css';

export default function Fractionnel(props) {
  return (
    <p className='Compteur-style'>
      {props.num}/{props.length}
    </p>
  )
}
