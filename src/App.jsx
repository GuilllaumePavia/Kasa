import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
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
    <Route path="/Annonce" element={<Annonce />}></Route>
    <Route path="/Apropos" element={<Apropos />}></Route>
    <Route path="*" element={<Error />}></Route> 
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;




   
