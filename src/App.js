import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Inventory from './views/Inventory';
import Profile from './views/Profile'
import CarSingle from './views/CarSingle';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { login, user, logout }= useContext(AuthContext)
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div>
        {user.loggedIn? (
          <>
          <p>Current user: {user.displayName}</p>
          <button onClick={logout}>Logout</button>
          </>
          ):(<button onClick={login}>Login</button>)}  
      </div>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/inventory' element={ <Inventory/> }/>
        <Route path='/profile' element={ <Profile/> }/>
        <Route path='/cars/:id' element={ <CarSingle/> }/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
