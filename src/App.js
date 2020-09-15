import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './components/avatar/Avatar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Interest from './pages/Interest'
import Awards from './pages/Awards'
import './App.css'
import './components/style.css'
import 'animate.css/animate.css'

function App() {
  const routes = [
      {
        path: "/",
        exact: true,
        main: () => <Home />
      },
      {
        path: "/about",
        main: () => <About />
      },
      {
        path: "/portfolio",
        main: () => <Portfolio />
      },
      {
        path: "/experience",
        main: () => <Experience />
      }
      ,
      {
        path: "/interest",
        main: () => <Interest />
      }
      ,
      {
        path: "/awards",
        main: () => <Awards />
      }
  ]
  return (
    <Router>
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
                        <Link to="/"><a className="nav-link js-scroll-trigger">Home</a></Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/about"><a className="nav-link js-scroll-trigger">About</a></Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/portfolio"><a className="nav-link js-scroll-trigger">Portfolio</a></Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/experience"><a className="nav-link js-scroll-trigger">Experience</a></Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/interest"><a className="nav-link js-scroll-trigger">Interest</a></Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/awards"><a className="nav-link js-scroll-trigger">Awards</a></Link>
                  </li>
              </ul>
          </div>
        </nav>
        <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
    </div>
    </Router>
  );
}

export default App;
