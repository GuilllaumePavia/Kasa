
import styled from 'styled-components';




const Nav = styled.nav`
display:flex;
flex-direction:column;
align-items:center;
height: 60px;
width:100%;
background-color:black;
margin-top:22px;
`

const P1 = styled.p`
    
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    color:white;
    position:relative;
    top:5px;
`

const P2 = styled.p`
    color: #8186a0;
    text-decoration: none;
    font-size: 18px; 
    color:Green;
    margin:0;
    letter-spacing:10px;
    font-size:20px ;
    position:relative;
    top:-26px;
    left:4px;
    
`


function Footer() {
  
  return (
    <>
    <Nav>
      <P1 to="/">Il n'y a pas de bonne réponse. Il y a ta bonne réponse</P1>
      <P2 to="/freelances">PROCHAIN SLOGAN PEPSI</P2>
    </Nav>
    </>
  )
}

export default Footer