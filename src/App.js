
import './App.css';
import Root from './Components/Root';
import {Route, Routes} from 'react-router-dom'
import Terms from './Components/Terms';
import Policy from './Components/Policy';
import Contact from './Components/Contact';

function App() {
  return (   
    <Routes>
        <Route path="/" element={<Root />} />
        <Route path="terms" element={<Terms />} />
        <Route path="policy" element={<Policy />} />
        <Route path="Contact" element={<Contact />} />

      </Routes>
   
  );
}

export default App;
