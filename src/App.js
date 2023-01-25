// import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Uncharted from './Components/Uncharted';
import poster from './images/uncharted.jpg';
function App() {
 const bg_img = {
  backgroundImage : `url(${poster})`,
  backgroundPosition: 'center',
  backgroundSize : 'cover',
  boxShadow: '0 0 85px 20px black inset'
 }
  return (
    <div className="App h-[100vh] bg-slate-400" style={bg_img}>
      <Navbar />
       <Uncharted />
    </div>
  );
}

export default App;
