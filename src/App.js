
import './App.css';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';

import { Routes ,Route} from 'react-router-dom'
import Contact from './Pages/Contact';
function App() {
  return (
  
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/About' element={<About/>} />

      <Route path='/Contact' element={<Contact/>} />

      {/* <Route path='*' element={<Dunno/>} /> */}
    </Routes>
    </div>
 
   
  );
}

export default App;
