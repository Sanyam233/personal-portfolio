import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className = {styles.logo} onClick={props.onClick}>
            <h1>S</h1>
        </div>
    );
}

export default Logo;