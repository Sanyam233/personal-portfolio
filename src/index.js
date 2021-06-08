import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars, 
  faExternalLinkAlt, 
  faCloudDownloadAlt, 
  faProjectDiagram, 
  faMedal, 
  faArrowCircleDown,
  faPaperPlane,
  faTimes,
  faAngleDoubleRight,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

import './index.module.css';
import App from './App';
import NavigationContextProvider from './context/NavigationContext';


library.add(
faBars,
faExternalLinkAlt, 
faCloudDownloadAlt, 
faProjectDiagram, 
faMedal, 
faArrowCircleDown, 
faTimes,
faPaperPlane,
faAngleDoubleRight,
faCircle
);

ReactDOM.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
