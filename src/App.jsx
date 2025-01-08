import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import Home from './routes/Home/home';
import About from './routes/About/about';
import Contact from './routes/Contact/contact';
import MainNavigation from './components/Navigation/mainNavigation';
import TalibNotes from './components/talib-notes/TalibNotes';
import ThankYou from './routes/Contact/ThankYou';


function App() { 

  

  return (
    <>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/talibnotes' element={<TalibNotes />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </>
  )
}

export default App;
