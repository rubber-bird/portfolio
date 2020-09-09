import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={About}  />
        <Route path="/projects" component={Projects}  />
        <Route path="/contact" component={Contact}  />

        <header>
        <div className="navigation">
          
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Marko Turchyn</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link"> About me </Link>
            </li>
            <li class="nav-item">
              <Link to="/projects" class="nav-link"> Projects </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link"> Contacts </Link>
            </li>
          </ul>
          </nav>
          

        </div>
        </header>
      </div>

    </BrowserRouter>
  );
}

export default App;
