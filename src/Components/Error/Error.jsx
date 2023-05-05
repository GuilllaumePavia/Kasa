import styled from 'styled-components';
import colors from '../../utils/colors';

function Error() {


  const ErrorDiv = styled.div`
  color: ${colors.primary};
 
`
const NumError = styled.h1`
font-size:98px;

`

const Errorp1 = styled.p`
font-size:20px;

`

const Errorp2 = styled.p`
font-size:13px;
margin-top:200px;

`

  return (
    <ErrorDiv>
      <NumError>404</NumError>
      <Errorp1>Oups! La plage que vous demandez n'existe pas.</Errorp1>
      <Errorp2>Retour sur la page d'accueil</Errorp2>
    </ErrorDiv>
  )
}

export default Error