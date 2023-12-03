import './App.css';

// Component Imports
import Header from './components/header'
import Footer from './components/footer'

// Page Imports
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
      <Footer />
    </>
  );
}

export default App;
