import './Card.css';
import {Link} from 'react-router-dom';


function Card(props) {

    const sectionStyle = {
        backgroundImage: "url(" + props.photo + ")"
      };
 
    return (
        <Link to= {"/Annonce/" + props.id}>
        <div className='Cards' style={sectionStyle} >
        <div className="Card-Title-div">
           <h3 className="Card-Title">{props.title}</h3> 
        </div> 
       </div>
       </Link>
    )
}

 export default Card