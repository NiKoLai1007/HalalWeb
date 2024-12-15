import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';

const App = () => {
  return (
    <div className="app-container"> {/* Wrapper div for layout */}
      <Router>
        <Header />
        <main className="content"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
