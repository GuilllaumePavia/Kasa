import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';
import Apropos from './Pages/Apropos';
import Annonce from './Pages/Annonce';
import Home from './Pages/Home';
import Survey from './Pages/Survey';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header />
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/Survey/:questionNumber" element={<Survey />}></Route>
    <Route path="/Annonce" element={<Annonce />}></Route>
    <Route path="/Apropos" element={<Apropos />}></Route>
    <Route path="*" element={<Error />}></Route> 
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;




   
