import { useContext } from 'react';

import styles from './SideDrawer.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import { NavigationContext } from '../../../context/NavigationContext';


const SideDrawer = (props) => {

    const navigationCtx = useContext(NavigationContext);

    return (<div style = {{display : navigationCtx.drawerIsVisible ? 'block' : 'none'}} className = {styles.sideDrawer}>
        <div className = {styles.navigationLinkContainer}>
            <NavigationLinks/>
        </div>
    </div>);

}


export default SideDrawer;