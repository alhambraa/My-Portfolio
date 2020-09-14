import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './components/avatar/Avatar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
import Education from './components/Education/Education'
import './App.css'
import './components/style.css'
import 'animate.css/animate.css'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none  mx-0 px-0"><img src="img/logo-white.png" alt="" className="img-fluid"/></span>
            <span className="d-none d-lg-block">
            <div ><Avatar src={Avatar} alt={Avatar}/></div>
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#experience">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#skills">Education</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#awards">Award</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
        </nav>
        <div className="container-fluid p-0">
            <Home 
                name= "Al Hambra"
                description = "Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area
                Twitter: @JakartaJS and we user the hashtag #jakartajs"
            />
            <About/>
            <Portfolio/>
            <Education/>

        </div>
    </div>
  );
}

export default App;
