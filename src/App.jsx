import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/home';
import MainNavigation from './components/Navigation/mainNavigation';


function App() { 

  return (
    <>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
