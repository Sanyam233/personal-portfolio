import { useContext } from 'react';

import styles from './Backdrop.module.css';
import { NavigationContext } from '../../../context/NavigationContext';

const Backdrop = () => {

    const navigationCtx = useContext(NavigationContext);

    return (
    <div style = {{display : navigationCtx.drawerIsVisible ? 'block' : 'none'}} onClick = {navigationCtx.onSideDrawerToggle}
    className = {styles.backdrop}></div>
    );

}

export default Backdrop