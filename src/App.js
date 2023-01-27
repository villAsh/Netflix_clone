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
import MediaContext from './TypeContext';
import { useState } from 'react';
function App() {
  const [type, setType] = useState({});
  console.log("Type...",type)
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <MediaContext.Provider value={{type,setType}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='trending/:id' element={<SingleContent />} />
        <Route path='shows' element={<Shows />} />
        <Route path='movies' element={<Movies />} />
      </Routes>
      </MediaContext.Provider>
   
      
    </Router>

  );
}

export default App;
