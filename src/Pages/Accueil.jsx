import Card from '../Components/Card/Card';
import BanniereAccueil from '../Components/BanniereAccueil/BanniereAccueil';
import './Accueil.css';



const freelancePeople = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
   
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
   
  },
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
   
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
   
  },
]

function Apropos() {
  return (
    <div>
      <BanniereAccueil/>
      <div className='CardContainer'>
      <div className='CardsContainer'>
        {freelancePeople.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Apropos