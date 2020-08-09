import React, { useRef, useEffect } from 'react';
import './App.css';
import './media.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Nav, Home} from './components'

import {TweenMax, TimelineLite, Expo} from 'gsap'
function App() {
  let app = useRef(null)
  let overlay = useRef(null)
  const tl = new TimelineLite();
  useEffect(() => {
    TweenMax.to(app, 1, {css: {visibility: 'visible'}});
    console.log(overlay.children)
    for(var i=0; i<overlay.children.length; i++) {
      tl.to(overlay.children[i], 1, {
        opacity: .5,
        height: 0,
        ease: Expo.easeOut
      }, .5)
    }
  }, [])
  return (
    <div ref={e=>app=e} className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path={["/", "/home", "/lpado"]} component={Home}></Route>
        </Switch>
        <footer>
          <h6>make your brand more clever</h6>
          <FontAwesomeIcon icon={faArrowRight}/>
        </footer>
      </Router>
      <div ref={e=>overlay=e} className="overlay">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
