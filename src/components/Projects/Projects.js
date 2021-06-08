import { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './Projects.module.css';
import Title from '../Title/Title';
import WebsiteLayout from './Layouts/WebsiteLayout/WebsiteLayout';
import MobileLayout from './Layouts/MobileLayout/MobileLayout';
import { majorProjects } from '../../helpers/projectDescriptions';
import { NavigationContext } from '../../context/NavigationContext';


const Projects = () => {

    const navigationCtx = useContext(NavigationContext);

    const Projects = majorProjects.map((project, i) => {

        if(project.display === 'website'){
            return <WebsiteLayout key = {i} desc = {project}/>
        }else{
            return <MobileLayout key = {i} desc = {project}/>
        }
    });

    const changeVisibility = (visible) => {
        navigationCtx.changeVisibility('PROJECTS', visible);
    }

    return (
        <VisibilitySensor partialVisibility onChange = {changeVisibility} offset = {{top : 500, bottom : 500}}>
            <section className = {styles.projectContainer} id = 'projects'>
                <Title heading = 'Projects'/>
                {Projects}
            </section>
        </VisibilitySensor>

    );
};

export default Projects;