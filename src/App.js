
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './Pages/Shows';
import Movies from './Pages/Movies';
import SingleContent from './Pages/SingleContent';
import MediaContext from './TypeContext';
import { useState } from 'react';
import poster from './images/bghero.jpg';
import Hero from "./Components/Hero";
function App() {
  const [type, setType] = useState({});
  // console.log("Type...",type)
  const bg_img = {
    backgroundImage: `url(${poster})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    zIndex: '0',
  }
  return (
    <Router>
      <div className="App " style={bg_img}>
        <Navbar />
        <Hero/>
        </div>
      <MediaContext.Provider value={{type,setType}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='trending/:id' element={<SingleContent />} />
        <Route path='shows' element={<Shows />} />
        <Route path='shows/tv/:id' element={<SingleContent />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/movie/:id' element={<SingleContent />} />
     
      </Routes>
      </MediaContext.Provider>
   
      
    </Router>

  );
}

export default App;
