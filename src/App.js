
import './App.css';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';

import { Routes ,Route} from 'react-router-dom'
function App() {
  return (
  
    <div className="App">
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/About' element={<About/>} />
      </Routes>
    </div>
 
   
  );
}

export default App;
