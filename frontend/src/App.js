import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Layout/Header';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Dashboard from './Components/Admin/Dashboard';
import UserLists from './Components/Admin/UserLists';
import FoodLists from './Components/Admin/FoodLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';
import Menu from './Components/Restaurant/Menu';
import About from './Components/About';
import Profile from './Components/User/profile';


const App = () => {
  return (
    <div className="app-container"> {/* Wrapper div for layout */}
    <Cart/>
      <Router>
        <Header />
        <main className="content"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/menu" element={<Menu />} exact />
            <Route path="/cart" element={<Cart/>} exact />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} exact />
            <Route path="/signup" element={<Register />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/userlists" element={ <UserLists /> } />
            <Route path="/foodlists" element={ <FoodLists /> } />
          </Routes>
        </main>
  
      </Router>
    </div>
  );
};

export default App;
