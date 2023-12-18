import './App.css';

// Component Imports
import Header from './components/header'
import Footer from './components/footer'

// Page Imports
import Home from './pages/home'
import UpcomingEvents from './pages/upcoming-events'
import SignUps from './pages/sign-ups'

// React Router
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='content'>
      <Header />
      <div className='router-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upcoming-events' element={<UpcomingEvents />} />
          <Route path='/sign-ups' element={<SignUps />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
