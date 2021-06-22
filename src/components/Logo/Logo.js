import styles from './Logo.module.css';
import Logo from '../../assets/Logo/logo.svg'

const Logo = (props) => {
    return (
        <div className = {styles.logo} onClick={props.onClick}>
            <img src = {Logo} alt = "Logo"/>
        </div>
    );
}

export default Logo;