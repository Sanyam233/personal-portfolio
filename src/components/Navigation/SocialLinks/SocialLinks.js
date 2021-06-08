import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import classes from './SocialLinks.module.css';
import * as socialLinks from '../../../json/external_links.json';

const SocialLinks = () => (
    <div className = {classes.socialLinks}>
        <a href = {socialLinks.GITHUB} target = '_blank' rel = 'noreferrer' >
            <FontAwesomeIcon className = {classes.link} icon = {faGithub}/>
        </a> 
        <a href = {socialLinks.LINKEDIN} target = '_blank' rel = 'noreferrer' >
            <FontAwesomeIcon className = {classes.link} icon = {faLinkedin}/>
        </a> 
        <a href = {socialLinks.FACEBOOK} target = '_blank' rel = 'noreferrer' >
            <FontAwesomeIcon className = {classes.link} icon = {faFacebook}/>
        </a> 
        <a href = {socialLinks.INSTAGRAM} target = '_blank' rel = 'noreferrer' >
            <FontAwesomeIcon className = {classes.link} icon = {faInstagram}/>
        </a> 
        <a href = {socialLinks.TWITTER} target = '_blank' rel = 'noreferrer' >
            <FontAwesomeIcon className = {classes.link} icon = {faTwitter}/>
        </a> 
    </div>
);


export default SocialLinks;

