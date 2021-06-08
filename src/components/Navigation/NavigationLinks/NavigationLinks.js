import { useContext } from 'react';

import styles from './NavigationLinks.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { NavigationContext } from '../../../context/NavigationContext';

const NavigationLinks = () => {

    const navigationCtx = useContext(NavigationContext);

    const links = [
        {id : '1', title : 'About Me', link : 'aboutMe', isVisible : navigationCtx.aboutMeIsVisible},
        {id : '2', title : 'Experience', link : 'experience', isVisible : navigationCtx.experienceIsVisible},
        {id : '3', title : 'Projects', link : 'projects', isVisible : navigationCtx.projectsIsVisible},
        {id : '4', title : 'Contact Me', link : 'contactMe', isVisible : navigationCtx.contactMeIsVisible},
    ];

    const NavLinks = links.map((link) => <NavigationLink key = {link.id} {...link} closeSideDrawer = {navigationCtx.closeSideDrawer}/>);

    return (
        <ul className = {styles.navigationLinkContainer}>
            {NavLinks}
        </ul>);

}

export default NavigationLinks;