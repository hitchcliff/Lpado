import React, {useEffect, useRef} from 'react'
import styles from './Home.module.css'

import hoverEffect from 'hover-effect'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Model1 from '../../assets/model1.png'
import Model2 from '../../assets/model2.jpg'

import {TimelineLite, Expo} from 'gsap'

const Home = () => {
    let container = useRef(null)
    let parent = useRef(null)
    let slide1 = useRef(null)
    let slider2 = useRef(null)
    let heading = useRef(null)
    const tl = new TimelineLite();
    useEffect(() => {
        tl.from(parent, 3, {
            opacity: 0,
            x: 2000,
            opacity: 0,
            ease: Expo.ease
        })
        .from(slider2, 1.5, {
            x: 1000,
            ease: Expo.ease
        })
        .from(container, 1.5, {
            opacity: 0,
            scale: 0,
            ease: Expo.ease
        }, 3)
        .from(slide1, 1, {
            x: -1000,
            ease: Expo.ease
        })
        .from(heading, 1, {
            x: 100,
            opacity: 0,
            ease: Expo.ease
        })
    }, [])
    
    useEffect(() => {
       new hoverEffect({
           parent: container,
           intensity1: 0.5,
           intensity2: 0.3,
           angle: Math.PI/3,
           speedIn: 2,
           speedOut: 1,
           image1: Model1,
           image2: Model2,
           displacementImage:
            "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/heightMap.png"
       })
    }, [container])

    let settings = {
        className: styles.slideList,
        arrows: false,
        dots: true,
        customPaging: i => <button></button>,
        dotsClass: styles.slideDots,
        infinite: true,
        speed: 500,
        easing: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div ref={e=>parent=e} className={styles.container}>
            <Slider ref={e=>slide1=e} {...settings}>
                <div className={styles.details}>
                    <h6  className={styles.details__subheading}>memorable design</h6>
                    <h1 ref={e=>heading=e} className={styles.details__heading}>we made <br/> good works.</h1>
                    <button className={styles.details__button}>view portfolio</button>
                </div>
                <div className={styles.details}>
                    <h6 className={styles.details__subheading}>memorable design</h6>
                    <h1 className={styles.details__heading}>we achieved <br/> awesome design.</h1>
                    <button className={styles.details__button}>view portfolio</button>
                </div>
                <div className={styles.details}>
                    <h6 className={styles.details__subheading}>memorable design</h6>
                    <h1 className={styles.details__heading}>we have <br/> best layouts.</h1>
                    <button className={styles.details__button}>view portfolio</button>
                </div>
                <div className={styles.details}>
                    <h6 className={styles.details__subheading}>memorable design</h6>
                    <h1 className={styles.details__heading}>we gone <br/> to oscar.</h1>
                    <button className={styles.details__button}>view portfolio</button>
                </div>
            </Slider>
            <div ref={e=>slider2=e} className={styles.slider}>
                <div ref={e=>container=e} className={styles.img}/>
            </div>
        </div>
    )
}

export default Home
