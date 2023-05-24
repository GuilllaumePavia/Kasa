import PropTypes from 'prop-types';
import './Card.css';
// import colors from '../../utils/colors';





 
function Card(props) {
    return (
       
        <div className='Cards'>
            <h2 className='CardTitle'>{props.title}</h2>  
        </div>
    
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