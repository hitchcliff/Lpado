import React, {useEffect, useRef} from 'react'
import styles from './Home.module.css'

import Slider from 'react-slick'

import Model1 from '../../assets/model1.png'

import {TimelineLite, Expo} from 'gsap'

const Home = () => {
   
    let parent = useRef(null)
    let slider2 = useRef(null)

    const tl = new TimelineLite();
    useEffect(() => {
        tl.from(parent, 1, {
            y: '-200%',
            scale: .5,
            opacity: 0,
            ease: Expo.ease
        })
        .from(slider2, .5, {
            x: 1000,
            ease: Expo.ease
        })
    }, [])

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
            <Slider {...settings}>
                <div className={styles.details}>
                    <h6  className={styles.details__subheading}>memorable design</h6>
                    <h1 className={styles.details__heading}>we made <br/> good works.</h1>
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
                <img src={Model1} alt="model"/>
            </div>
        </div>
    )
}

export default Home
