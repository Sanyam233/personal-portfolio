import { Fade } from 'react-awesome-reveal';
// import FileSaver from 'file-saver';

import styles from './LandingPage.module.css';
import * as strings from '../../json/en_us.json';
import IconButton from '../Buttons/IconButton/IconButton';
import CV from '../../resources/CV.pdf';

const LandingPage = () => {
  
  const downloadCV = () => {
    // FileSaver.saveAs(
    //   process.env.PUBLIC_URL + '/resources/CV.pdf',
    //   'Sanyam_Gupta_Resume.pdf');
    window.open(CV);
  }

  return (
    <section className = {styles.container}>
      <Fade direction = 'right' cascade damping = {0.8} duration = {1000}>
        <h4 className = {styles.introLine1}>{strings.INTRODUCTION.INTRO_LINE_1}</h4>
        <h1 className = {styles.introHeading}>{strings.NAME}</h1>
        <h1 className = {styles.introHeading}>{strings.INTRODUCTION.INTRO_LINE_2}</h1>
        <p className = {styles.introParagraph}>{strings.INTRODUCTION.INTRO_PARAGRAPH}</p>
        <IconButton caption = {strings.INTRODUCTION.BUTTON_CAPTION} icon = 'cloud-download-alt' onClick = {downloadCV}/>
      </Fade>
    </section>
  );
}

export default LandingPage;