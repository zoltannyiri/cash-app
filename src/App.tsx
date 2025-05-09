
import Navbar from './components/Navbar/navbar';  // Importáljuk a Navbar komponenst
import './App.css';
import Home from './components/Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>

      <Navbar /> {/* Itt jelenik meg a Navbar komponens */}
      <Home />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
      
    </Router>
  );
}

export default App;
