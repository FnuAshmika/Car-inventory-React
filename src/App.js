import logo from './logo.svg';
import './App.css';
import './App.css';
import { useState } from 'react';
import { BrowserRoute, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Inventory from './views/Inventory';
import Profile from './views/Profile'
import CarSingle from './views/CarSingle';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/inventory' element={ <Inventory/> }/>
        <Route path='/profile' element={ <Profile/> }/>
        <Route path='/cars/:id' element={ <CarSingle/> }/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
