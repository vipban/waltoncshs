import './App.css';

// Component Imports
import Header from './components/header'
import Footer from './components/footer'

// Page Imports
import Home from './pages/home'
import Calendar from './pages/calendar'
import Events from './pages/events'

// React Router
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className='router-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/events' element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
