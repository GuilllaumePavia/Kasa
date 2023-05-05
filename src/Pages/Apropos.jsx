import Card from '../Components/Card/Card';
import styled from 'styled-components';
import colors from '../utils/colors';

const CardsContainer = styled.div`
  width:1200px;
  margin-left:65%;
  transform:translate(-50%);
  display:flex;
  justify-content:flex-start;
  flex-wrap:wrap;
  gap:115px;
`

const CardContainer = styled.div`
width:1200px;
background:gray;
width:1200px;
margin-left:50%;
transform:translate(-50%);
padding:30px;
border-radius: 10px;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`


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
]

function Apropos() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardContainer>
      <CardsContainer>
        {freelancePeople.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
      </CardContainer>
    </div>
  )
}

export default Apropos