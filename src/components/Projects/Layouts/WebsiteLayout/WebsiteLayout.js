import React from 'react';

import classes from './WebsiteLayout.module.css';
import ProjectDescription from '../../ProjectDescription/ProjectDescription';


const WebsiteLayout = (props) => {

    return(
    <div className= {classes.WebsiteLayoutContainer}>
        <div className = {classes.WebsiteLayout}>
            <div  className = {classes.FrameOne} style = {{backgroundImage : `url(${props.desc.images.frame1})`}}>
                <div className = {classes.FrameTwo} style = {{backgroundImage : `url(${props.desc.images.frame2})`}}>
                    <div className = {classes.FrameThree} style = {{backgroundImage : `url(${props.desc.images.frame3})`}}>
                    </div>
                </div>
            </div>
        </div>
        <ProjectDescription {...props.desc}/>
    </div>)

}

export default WebsiteLayout;