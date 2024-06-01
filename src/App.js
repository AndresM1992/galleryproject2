import './App.css';
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import D1 from'./companents/D1';
import D2 from './companents/D2';
import D3 from './companents/D3';
import D4 from './companents/D4';
import D5 from './companents/D5';
import D6 from './companents/D6';
import D7 from './companents/D7';
import D8 from './companents/D8';
import D9 from './companents/D9';
import D10 from './companents/D10';
import Navigation from './companents/Navigation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/D1" element={<D1/>}/>
        <Route path="/D2" element={<D2/>}/>
        <Route path="/D3" element={<D3/>}/>
        <Route path="/D4" element={<D4/>}/>
        <Route path="/D5" element={<D5/>}/>
        <Route path="/D6" element={<D6/>}/>
        <Route path="/D7" element={<D7/>}/>
        <Route path="/D8" element={<D8/>}/>
        <Route path="/D9" element={<D9/>}/>
        <Route path="/D10" element={<D10/>}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
