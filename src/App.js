// import { useEffect } from 'react';
import './App.css';
// import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
// import Trending from './Components/Trending';

import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './Pages/Shows';
import Movies from './Pages/Movies';
import SingleContent from './Pages/SingleContent';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='trending/:id' element={<SingleContent />} />
        <Route path='shows' element={<Shows />} />
        <Route path='movies' element={<Movies />} />
      </Routes>
      
    </Router>

  );
}

export default App;
