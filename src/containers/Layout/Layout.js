import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'

import cameraSelfie from './images/camera-selfie.JPG';
import arkadiusz from './images/arkadiusz.JPG';
import sageSquat from './images/sage-squat.JPG';

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <Jumbotron fluid>
                <h1>Universe, meet Will Lucas.</h1>
                <h5>I'm an adventurous Portland native and triple threat.</h5>
            </Jumbotron>
            <div className={classes.imageWrapper}>
                <Image src={arkadiusz} fluid rounded />
                <Image src={sageSquat} fluid rounded />
            </div>
                <Image src={cameraSelfie} fluid rounded />
        </>
    )
}

export default Layout