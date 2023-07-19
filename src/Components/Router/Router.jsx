import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import Apropos from '../../Pages/Apropos';
import Annonce from '../../Pages/Annonce';
import Accueil from '../../Pages/Accueil';

export default function Router() {
  return (
    <div>
        <BrowserRouter>
<Header />
  <Routes>
  <Route path="/" element={<Accueil />}></Route>
    <Route path="/Annonce/:id" element={<Annonce /> } errorElement={<Error />}></Route>
    <Route path="/Apropos" element={<Apropos />} errorElement={<Error />}></Route>
    <Route path="*" element={<Error />}></Route> 
    <Route path="/Error" element={<Error />}></Route> 
  </Routes>
  <Footer />
</BrowserRouter>
    </div>
  )
}









