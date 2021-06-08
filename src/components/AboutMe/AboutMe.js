import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './AboutMe.module.css';
import Title from '../Title/Title';
import * as strings from '../../json/en_us.json';
import { NavigationContext } from '../../context/NavigationContext';

const AboutMe = () => {

    const navigationCtx = useContext(NavigationContext);

    const changeVisibility = (visible) => {
        navigationCtx.changeVisibility('ABOUT_ME', visible);
    }

    const Skills = strings.ABOUT_ME.SKILLS.map((skill, idx) => {
        return <span key = {idx} className = {styles.skill}> {skill}</span>
    });
    
    return (
    <VisibilitySensor onChange = {changeVisibility}>
        <section className = {styles.aboutMe} id = 'aboutMe'>
            <Title heading = {strings.HEADINGS.ABOUT_ME} />
            <div className = {styles.container}>
                <div className = {styles.introductionContainer}>
                    <p>{strings.ABOUT_ME.PARAGRAPH_1}</p>
                    <p>{strings.ABOUT_ME.PARAGRAPH_2}</p>
                    <p>{strings.ABOUT_ME.PARAGRAPH_3}{Skills}</p>
                </div>
                <div className = {styles.picture}></div>
            </div>
        </section>
    </VisibilitySensor>
    );
};

export default AboutMe;