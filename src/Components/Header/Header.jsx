import { Link } from 'react-router-dom';
import styled from 'styled-components';
import picture from '../assets/picture.png'
import { StyledLink } from '../../utils/Atoms'



const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// const StyledLink = styled.`
//   color:#FF6060;
// `

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={picture} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/apropos">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header