import { Link } from 'react-scroll';

import styles from './NavigationLink.module.css';

const NavigationLink = (props) => {

    return (
        <li className = {styles.navigationLink}>
            <Link 
            onClick = {props.closeSideDrawer}
            activeClass = {styles.active} 
            className = {`${styles.navLink} ${props.isVisible ? styles.active : ''}`} 
            to = {props.link} 
            smooth
            spy>
                {props.title}
            </Link>
        </li>
    );
}

export default NavigationLink;