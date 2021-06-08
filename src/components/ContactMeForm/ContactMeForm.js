import React, { useContext, useReducer, useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './ContactMeForm.module.css';
import Title from '../../components/Title/Title';
import IconButton from '../../components/Buttons/IconButton/IconButton';
import { NavigationContext } from '../../context/NavigationContext';
import emailjs from 'emailjs-com';

const initialState = {
    nameIsValid : false,
    emailIsValid : false,
    messageIsValid : false,
    subjectIsValid : false,
}

const contactMeReducer = (state = initialState, action) => {

    if (action.type === 'NAME') {
        return {...state, nameIsValid: action.name.trim().length >= 3};
    }

    if (action.type === 'EMAIL') {
        return {...state, emailIsValid: action.email.includes('@')};
    }
    
    if (action.type === 'SUBJECT') {
        return {...state, subjectIsValid: action.subject.trim().length >= 3};
    }
    
    if (action.type === 'MESSAGE') {
        return {...state, messageIsValid: action.message.trim().length >= 3};
    }

    if (action.type === 'RESET') {
        return initialState;
    }
    
    return initialState
}

const ContactMeForm = () => {

    const navigationCtx = useContext(NavigationContext);
    const [contactMeState, dispatchContactMe] = useReducer(contactMeReducer, initialState);
    const [formState, setFormState] = useState(false);
    const API_KEY = process.env.REACT_APP_EMAIL_JS_API_KEY;
    const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;


    useEffect(() => {
        const finalFormstate = contactMeState.nameIsValid && contactMeState.emailIsValid && contactMeState.messageIsValid && contactMeState.subjectIsValid;
        setFormState(finalFormstate);
    }, [contactMeState.nameIsValid, contactMeState.emailIsValid, contactMeState.messageIsValid, contactMeState.subjectIsValid]);

    const changeVisibility = (visible) => {
        navigationCtx.changeVisibility('CONTACT_ME', visible);
    }

    const onNameBlur = (event) => {
        console.log(event);
        dispatchContactMe({type : 'NAME', name : event.target.value});
    }

    const onEmailBlur = (event) => {
        dispatchContactMe({type : 'EMAIL', email : event.target.value});
    }

    const onSubjectBlur = (event) => {
        dispatchContactMe({type : 'SUBJECT', subject : event.target.value});
    }

    const onMessageBlur = (event) => {
        dispatchContactMe({type : 'MESSAGE', message : event.target.value});
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
        e.target.reset();
        dispatchContactMe({type : 'RESET'});
      }    

    return (
    <VisibilitySensor onChange = {changeVisibility} >
        <div className = {styles.container} id = 'contactMe'>
            <Title 
            heading = 'Contact Me'/>
            <form className = {styles.contactMeForm} onSubmit = {sendEmail}>
                <input className = {styles.inputField} placeholder = 'Name' type = 'text' name = 'from_name' onBlur = {onNameBlur}/>
                <input className = {styles.inputField} placeholder = 'Email' type = 'text' name = 'from_email' onBlur = {onEmailBlur}/>
                <input className = {styles.inputField} placeholder = 'Subject' type = 'text' name = 'subject' onBlur = {onSubjectBlur}/>
                <textarea className = {styles.textAreaField} placeholder = 'Message' name = 'message' onBlur = {onMessageBlur}/>
                <div className = {styles.buttonContainer}>
                    <IconButton icon = 'paper-plane'
                    caption = 'Send Message'
                    disabled = {!formState}/>
                </div>
            </form>
        </div>
    </VisibilitySensor>
    );

}

export default ContactMeForm