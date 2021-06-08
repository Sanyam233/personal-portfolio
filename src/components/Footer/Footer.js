import styles from './Footer.module.css';
import SocialLinks from '../Navigation/SocialLinks/SocialLinks';

const Footer = () => (<footer className = {styles.footer}>
    <div>
        <h4 className = {styles.footerHeader}>Designed and Developed by Sanyam Gupta</h4>
        <SocialLinks/>
    </div>
</footer>)

export default Footer;