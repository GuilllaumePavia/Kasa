import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import Apropos from './Pages/Apropos';
import Annonce from './Pages/Annonce';
import Accueil from './Pages/Accueil';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header />
  <Routes>
  <Route path="/" element={<Accueil />}></Route>
    <Route path="/Annonce/:id" element={<Annonce /> }></Route>
    <Route path="/Apropos" element={<Apropos />} errorElement={<Error />}></Route>
    <Route path="*" element={<Error />}></Route> 
  </Routes>
  <Footer />
</BrowserRouter>
    </div>
  );
}

export default App;




   
