import React, { useState, useRef, useEffect } from 'react'
import styles from './Nav.module.css'
import {Link, NavLink} from 'react-router-dom'
import cx from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {TimelineLite, Expo} from 'gsap';

const Nav = () => {
    let container = useRef(null)
    let icons = useRef(null)
    let menu = useRef(null)
    const tl = new TimelineLite();
    
    useEffect(() => {
        tl.from(container, 1, {
            x: -1000,
            ease: Expo.ease
        })
        .from(menu, 1, {
            y: -500,
            ease: Expo.ease
        }, 1)
        for(let i=0; i<icons.children.length; i++) {
            tl.from(icons.children[i], .2, {
                opacity: 0,
                x: 500,
                ease: Expo.ease
            })
        }
    }, [])

    const [state, setstate] = useState(true)
    const toggleChange = () => {
        setstate(!state)
    }
    return (
        <div ref={e=>container=e} className={styles.container}>
            <div className={styles.menu}>
                <h6 className={styles.menu__logo}><Link exact to="/lpado">Lpado</Link></h6>
                <ul ref={e=>menu=e} className={state ? styles.menu__items : cx(styles.menu__hidden)}>
                <button onClick={toggleChange} className={styles.menu__close}><FontAwesomeIcon icon={faTimes}/></button>
                    <li>
                        <NavLink exact to="/lpado" activeClassName={styles.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pages" activeClassName={styles.active}>Pages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName={styles.active}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
                    </li>
                </ul>
                <button onClick={toggleChange} className={styles.menu__bars}><FontAwesomeIcon icon={faBars}/></button>
                
            </div>
            <div ref={e=>icons=e} className={styles.social}>
                <a href="https://www.linkedin.com/in/kevin-nacario-57485718a/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-nacario-57485718a/">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-nacario-57485718a/">
                    <FontAwesomeIcon icon={faDribbble}/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-nacario-57485718a/">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
        </div>
    )
}

export default Nav
