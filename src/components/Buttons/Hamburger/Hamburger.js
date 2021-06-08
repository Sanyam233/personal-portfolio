import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Hamburger.module.css';
import { NavigationContext } from '../../../context/NavigationContext';

const Hamburger = () => {

    const navigationCtx = useContext(NavigationContext);

    return (
    <button className = {styles.Hamburger} onClick = {navigationCtx.onSideDrawerToggle}>
        <FontAwesomeIcon 
        icon = {navigationCtx.drawerIsVisible ? 'times' : 'bars'}
        className = {styles.Bars}/>
    </button>)

};

export default Hamburger;