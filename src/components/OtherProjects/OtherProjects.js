import { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


import styles from './OtherProjects.module.css';
import ProjectTile from './ProjectTile/ProjectTile';
import { otherProjects } from '../../helpers/projectDescriptions';
import Title from '../Title/Title';
import { NavigationContext } from '../../context/NavigationContext';


const OtherProjects = (props) => {

    const navigationCtx = useContext(NavigationContext);

    const Projects = otherProjects.map((project, idx) => <ProjectTile key = {idx} {...project}/>);

    const changeVisibility = (visible) => {
        navigationCtx.changeVisibility('PROJECTS', visible);
    }

    return(
    <VisibilitySensor onChange = {changeVisibility} >
        <section className = {styles.otherProjects}>
            <Title heading = 'Other Projects'/>
            <div className = {styles.projectGrid}>
                {Projects}
            </div>
        </section>
    </VisibilitySensor>
    )
}

export default OtherProjects;