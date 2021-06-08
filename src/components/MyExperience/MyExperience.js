import { useState, useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './MyExperience.module.css';
import Title from '../Title/Title';
import Description from './Description/Description';
import * as jobStrings from '../../json/jobs.json';
import * as strings from '../../json/en_us.json';
import { NavigationContext } from '../../context/NavigationContext';

const MyExperience = () => {

    const [currentExpState, setCurrentExpState] = useState({current :jobStrings.default["JOB_1"], selected : "JOB_1"});
    const navigationCtx = useContext(NavigationContext);

    const descriptionSelector = (id) => {
        setCurrentExpState({
            current : jobStrings.default[id], 
            selected : id
        });
    }

    const changeVisibility = (visible) => {
        navigationCtx.changeVisibility('EXPERIENCE', visible);
    }

    const jobs = jobStrings.default;

    const NavigationLinks = Object.keys(jobs).map((id) => {
        let classes = [styles.navigationLinks];

        if(id === currentExpState.selected) classes.push(styles.active);

        return (
        <div key = {id} className = {classes.join(" ")} onClick = {() => descriptionSelector(id)}>
            <li>
                {jobs[id].ORGANIZATION}
            </li>
        </div>);
    });

    return(
    <VisibilitySensor onChange = {changeVisibility} >
        <section className = {styles.myExperience} id = 'experience'>
            <Title heading = {strings.HEADINGS.EXPERIENCE}/>
            <div className = {styles.experience} >
                <ul className =  {styles.expNavigation}>
                    {NavigationLinks}
                </ul>
                <Description {...currentExpState.current}/>
            </div>
        </section>
    </VisibilitySensor>);

}

export default MyExperience;