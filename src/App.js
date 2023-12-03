import './App.css';

// Page Imports
import Header from './components/header/header'
import Home from './pages/home'
import Materials from './pages/materials'
import Locations from './pages/locations'

// React Router
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      
      <div className='router-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
