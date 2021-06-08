import React, { useState, useReducer } from 'react';

const initialState = {
    aboutMeIsVisible : false,
    experienceIsVisible : false,
    projectsIsVisible : false,
    contactMeIsVisible : false
}
  
const navigationReducer = (state = initialState, action) => {
  
  if (action.type === 'ABOUT_ME') {
    return {...initialState, aboutMeIsVisible : action.isVisible};
  }

  if (action.type === 'MY_EXPERIENCE') {
    return {...initialState, experienceIsVisible : action.isVisible};
  }

  if (action.type === 'PROJECTS') {
    return {...initialState, projectsIsVisible : action.isVisible};
  }

  if (action.type === 'CONTACT_ME') {
    return {...initialState, contactMeIsVisible : action.isVisible};
  }

  return initialState;
}

export const NavigationContext = React.createContext({
  aboutMeIsVisible : false,
  experienceIsVisible : false,
  projectsIsVisible : false,
  contactMeIsVisible : false,
  drawerIsVisible : false,
  changeVisibility : () => {},
  onSideDrawerToggle : () => {},
  closeSideDrawer : () => {}
});

const NavigationContextProvider = (props) => {

  const [navigationState, dispatchNavigationState] = useReducer(navigationReducer, initialState);
  const [drawerDisplay, setDrawerDisplay] = useState(false);

  const changeVisibility = (actionType,isVisible) => {
    dispatchNavigationState({type : actionType, isVisible: isVisible});
  }

  const onSideDrawerToggle = () => {
    setDrawerDisplay((prevDrawerDisplay) => !prevDrawerDisplay);
  }

  const closeSideDrawer = () => {
    console.log('RUNNING');
    setDrawerDisplay(false);
  }


  return (
    <NavigationContext.Provider 
    value = {{
      aboutMeIsVisible : navigationState.aboutMeIsVisible,
      experienceIsVisible : navigationState.experienceIsVisible,
      projectsIsVisible : navigationState.projectsIsVisible,
      contactMeIsVisible : navigationState.contactMeIsVisible,
      drawerIsVisible : drawerDisplay,
      changeVisibility,
      onSideDrawerToggle,
      closeSideDrawer
    }}>
        {props.children}
    </NavigationContext.Provider>
  )

}

export default NavigationContextProvider;