import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './ProjectDescription.module.css';


const ProjectDescription = (props) => {

    const icons = [faGithub, 'external-link-alt'];

    const IconLinks = props.links.map((link, idx) => 
        <a href = {link} key = {idx} className = {styles.icon} target = '_blank' rel = 'noreferrer'>
            <FontAwesomeIcon icon = {icons[idx]}/>
        </a>
    );

    const Technologies = props.technologies.map((title, idx) => {
        return (<span className = {styles.technology} key = {idx}>{title}</span>)
    });

    return (<div className = {styles.projectDescription}>
        <div className = {styles.headerContainer}>
            <h3 className = {styles.title}>{props.title}</h3>
            <div className = {styles.linksContainer}>
                {IconLinks}
            </div>
        </div>
        <p>{props.description}</p>
        <div className = {styles.techContainer}>
            {Technologies}
        </div>
    </div>)

}

export default ProjectDescription;