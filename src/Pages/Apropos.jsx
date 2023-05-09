import React from 'react'
import BanniereApropos from '../Components/BanniereApropos/BanniereApropos';
import BoxApropos from '../Components/BoxApropos/BoxApropos';
import './Apropos.css';

export default function Apropos() {
  return (
    <div>
      <BanniereApropos/>
      <div className='BoxApropos-Orga'>
      <BoxApropos/>
      <BoxApropos/>
      <BoxApropos/>
      <BoxApropos/>
      <BoxApropos/>
     </div>
    </div>
  )
}
