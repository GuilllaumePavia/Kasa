
// import styled from 'styled-components'
import styled from 'styled-components'
import Banniere from '../Components/Banniere/Banniere';
// import HomeIllustration from '../../assets/home-illustration.svg'


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function Home() {
  return (
    <HomeWrapper>
   <Banniere />
    </HomeWrapper>
  )
}
  
  export default Home