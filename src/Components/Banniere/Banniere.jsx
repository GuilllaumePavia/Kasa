
import styled from 'styled-components';






const Ban = styled.div`
  border-radius:10px;
  background:#FF6060;
  width:800px;
  height:200px;
  display:flex;
  justify-content:center;
  align-items:center;
`

function Banniere() {
  return (
    <Ban>
      <p>Chez vous, partout et ailleurs</p>
      <img src="" alt="" />
    </Ban>
  )
}

export default Banniere