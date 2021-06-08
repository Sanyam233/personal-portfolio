import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';


import styles from './NavigationBar.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import Logo from '../../Logo/Logo';
import Hamburger from '../../Buttons/Hamburger/Hamburger';

const NavigationBar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }    

    return (
    <nav className = {styles.navigationBar}>
        <div className = {styles.logoContainer}>
            <Logo onClick = {scrollToTop} />
        </div>
        <NavigationLinks/>
        <Hamburger/>
        <div className = {[styles.logoContainer, styles.wrapper].join(' ')}>
            <FontAwesomeIcon 
            className = {styles.navigationIcon} 
            icon = 'arrow-circle-down'
            onClick = {scrollToBottom}/>
        </div>
    </nav>
)};

export default NavigationBar;