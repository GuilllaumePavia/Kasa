// import colors from '../../utils/colors';
import './Error.css';

function Error() {

  return (
    <div className='ErrorDiv'>
      <h1 className='NumError'>404</h1>
      <p className='Errorp1'>Oups! La plage que vous demandez n'existe pas.</p>
      <p className='Errorp2'>Retour sur la page d'accueil</p>
    </div>
  )
}

export default Error