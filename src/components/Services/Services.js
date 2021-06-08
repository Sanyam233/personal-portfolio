import styles from './Services.module.css';
import Title from '../Title/Title';
import ServiceCard from './ServiceCard/ServiceCard';



const Services = (props) => {

    return (
        <section className = {styles.services}>
            <Title heading = "What can I do?"/>
            <div className = {styles.container}>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </section>
    );
}

export default Services;