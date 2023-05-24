import {useParams} from "react-router-dom";
import Card from '../Components/Card/Card';
import BanniereAccueil from '../Components/BanniereAccueil/BanniereAccueil';
import './Accueil.css';
import Data from '../Data/logements.json';

function Apropos() {

  const id = useParams().id

  return (
  <div>
    <BanniereAccueil/>
    <div className='CardContainer'>
      <div className='CardsContainer'>
        {Data.map(() => (
          <Card title={Data[id].title}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Apropos