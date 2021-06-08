import React from 'react';

import classes from './MobileLayout.module.css';

import ProjectDescription from '../../ProjectDescription/ProjectDescription';


const MobileLayout = (props) => {

    return(
    <div className= {classes.MobileLayoutContainer}>
        <div className = {classes.MobileLayout}>
            <div className = {classes.FrameOne} style = {{backgroundImage : `url(${props.desc.images.frame1})`}}>
                <div className = {classes.FrameTwo} style = {{backgroundImage : `url(${props.desc.images.frame2})`}}>
                    <div className = {classes.FrameTwo} style = {{backgroundImage : `url(${props.desc.images.frame3})`}}>
                        <div className = {classes.FrameTwo} style = {{backgroundImage : `url(${props.desc.images.frame4})`}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProjectDescription {...props.desc} />
    </div>)

}

export default MobileLayout;