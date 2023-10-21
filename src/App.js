import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routs/Home';
import Project from './routs/Project';
import About from './routs/About';
import Contact from './routs/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
