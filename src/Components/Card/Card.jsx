import PropTypes from 'prop-types';
import styled from 'styled-components';
// import colors from '../../utils/colors';


const Cards = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
background: linear-gradient(180deg, #FF6060 0%, rgba(0, 0, 0, 0.5) 100%);
border-radius: 10px;
width: 300px;
height: 300px;
transition: 200ms;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px #e2e3e9;
}
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardTitle = styled.span`
  display:flex;
  justify-content: flex-start;
  margin-top:90%;
 

`


 
function Card({ label, title, picture }) {
    return (
       
        <Cards>
            <CardTitle>{title}</CardTitle>  
        </Cards>
    
    )
}
 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

// Card.defaultProps = {
//     title: '',
//     label: '',
//     picture: DefaultPicture,
// }
 
export default Card