import styles from './ProjectTile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectTile = (props) => {

    const icons = [faGithub, 'external-link-alt'];

    const IconLinks = props.links.map((link, idx) => {
        return (
        <a href = {link} key = {idx} className = {styles.linkIcon} target = '_blank' rel = 'noreferrer'>
            <FontAwesomeIcon icon = {icons[idx]}/>
        </a>);
    });

    return (
    <div className = {styles.projectTile}>
        <div className = {styles.projectTileHeader}>
            <h3>{props.title}</h3>
            <div>
                {IconLinks}
            </div>
        </div>
        <div className = {styles.descriptionContainer}>
            <p>{props.description}</p>
            <div className = {styles.technologyContainer}>
                {props.technologies.map((tech, idx) => <span key = {idx} >{tech}</span>)}
            </div>
        </div>
    </div>
    )

}

export default ProjectTile;