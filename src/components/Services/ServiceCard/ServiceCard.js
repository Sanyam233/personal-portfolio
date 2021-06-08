import styles from './ServiceCard.module.css';

const ServiceCard = (props) => {

    return (
        <div className = {styles.card}>
            <h3>Header</h3>
            <p>
                Being a self-taught developer myself, I do understand the 
                steap learning curve one needs to overcome in order to become a 
                professional developer. Thus, I can help you in that journey through
                knowledge in <span className = {styles.sp}>Java, Javascript, Python, HTML/CSS and C++</span>
            </p>
        </div>
    )
}

export default ServiceCard;