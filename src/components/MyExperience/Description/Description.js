import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Description.module.css';

const Description = (props) => {

    const Responsibilities = props.DUTIES.map((duty, idx) => {
        return(
        <div className = {styles.jobDescription} key = {idx} >
            <FontAwesomeIcon className = {styles.bullets} icon = 'angle-double-right'/>
            <p>{duty}</p>
        </div>);
    })

    return(
    <div className = {styles.description}>
        <h3 className = {styles.title}>{props.POSITION}</h3>
        <p className = {styles.organization}>{props.ORGANIZATION}</p>
        <p className = {styles.jobDates}>{props.PERIOD}</p>
        {Responsibilities}
    </div>)
}

export default Description;