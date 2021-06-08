import styles from './Title.module.css';

const Title = (props) => (
    <div className = {styles.titleContainer}>
        <div className = {styles.title}>
            <h2 className = {styles.heading}>{props.heading}</h2>
            <div className = {styles.underline}></div>
        </div>
    </div>

);

export default Title;