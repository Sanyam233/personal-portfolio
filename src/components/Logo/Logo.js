import styles from './Logo.module.css';
import logo from '../../assets/Logo/logo.svg'

const Logo = (props) => {
    return (
        <div className = {styles.logo} onClick={props.onClick}>
            <img src = {logo} alt = "Logo"/>
        </div>
    );
}

export default Logo;