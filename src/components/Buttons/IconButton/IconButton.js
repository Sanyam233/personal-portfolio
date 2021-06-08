import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconButton.module.css';

const IconButton = (props) => {
    
    return (
    <button className = {styles.button} onClick={props.onClick} disabled = {props.disabled}>
        <FontAwesomeIcon className = {styles.buttonIcon} icon = {props.icon}/>
        <span>{props.caption}</span>
    </button>
    );
}

export default IconButton;