import React from 'react';
import { Fade } from 'react-awesome-reveal';

import styles from './App.module.css';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import AboutMe from './components/AboutMe/AboutMe';
import MyExperience from './components/MyExperience/MyExperience';
import Projects from './components/Projects/Projects';
import OtherProjects from './components/OtherProjects/OtherProjects';
import Footer from './components/Footer/Footer';
import SocialLinks from './components/Navigation/SocialLinks/SocialLinks';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import ContactMeForm from './components/ContactMeForm/ContactMeForm';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {

  return (
  <React.Fragment>
    <SideDrawer/>
    <NavigationBar/>
    <div className = {styles.socialLinkContainer}>
      <SocialLinks/>
    </div>
    <div className = {styles.mainContainer}>
      <LandingPage/>
      <Fade cascade damping = {0.2} duration = {300}>
        <AboutMe />
        <MyExperience />
        <Projects />
        <OtherProjects />
        <ContactMeForm />
      </Fade>
    </div>
    <Footer/>
  </React.Fragment>
  );
};

export default App;
