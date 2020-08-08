import React, { useRef, useEffect } from 'react';
import './App.css';
import './media.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Nav, Home} from './components'

import {Cube} from 'react-preloaders';
import {TweenMax} from 'gsap'
function App() {
  let app = useRef(null)
  // useEffect(() => {
  //   TweenMax.to(app, 1, {css: {visibility: 'visible'}})
  // }, [])
  return (
    <div ref={e=>app=e} className="App">
      <Cube color="#FCCA22" animation="slide-left"/>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path={["/", "/home"]} component={Home}></Route>
        </Switch>
        <footer>
          <h6>make your brand more clever</h6>
          <FontAwesomeIcon icon={faArrowRight}/>
        </footer>
      </Router>
      
    </div>
  );
}

export default App;
