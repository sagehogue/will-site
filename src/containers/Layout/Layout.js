import React, { useContext } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'

import ImageGroup from '../../components/ImageGroup/ImageGroup';

import arkadiusz from './images/arkadiusz.JPG';
import sageSquat from './images/sage-squat.JPG';
import willSquat from './images/will-squat.jpg';
import willFlex from './images/will-flex.jpg';

import cameraSelfie from './images/camera-selfie.JPG';
import max from './images/max.jpg';
import face from './images/face-in-wall.JPG';
import lake from './images/e-city-lake-2.JPG';
import carCloseUp from './images/car-up-front.JPG';
// import people from './images/will-humans.JPG';

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <Jumbotron fluid>
                <h1>Universe, meet Will Lucas.</h1>
                <h5>I'm an adventurous Portland native and triple threat.</h5>
            </Jumbotron>
            <div className={classes.wrapper}>
                <div className={[classes.imageWrapper, classes.offsetY].join(' ')}>
                    <ImageGroup image>
                        <Image src={arkadiusz} fluid rounded />
                        <Image src={sageSquat} fluid rounded />
                    </ImageGroup>
                    <div className={[classes.caption, classes.pullDown].join(' ')}>
                        fitness photographer
                        <div className={classes.stripe} />
                    </div>
                </div>
                <div className={classes.imageWrapper}>
                    <Image src={willSquat} fluid rounded />
                    <div className={[classes.caption, classes.colorDarkPink, classes.alignCenter, classes.pullDownLess].join(' ')}>
                        powerlifter
                    </div>

                </div>
                <div className={classes.imageWrapper}>
                    <Image src={willFlex} fluid rounded />
                    <div className={[classes.caption, classes.colorTeal, classes.pullDownLess].join(' ')}>
                        occasional model.
                    </div>

                </div>
                <div className={classes.galleryPreface}>
                <h3>Sometimes I take pictures of the things I see..</h3>
                <h3>So here's a little look into my mind.</h3>
                </div>
                {/* <ImageGroup imageQuantity={5}>
                    <Image src={cameraSelfie} fluid rounded />
                    <Image src={face} fluid rounded />
                    <Image src={lake} fluid rounded />
                    <Image src={carCloseUp} fluid rounded />
                </ImageGroup> */}
                <ImageGroup imageQuantity={"experiment"}>
                    <Image src={cameraSelfie} fluid rounded />
                    <Image src={face} fluid rounded />
                    <Image src={lake} fluid rounded />
                    <Image src={carCloseUp} fluid rounded />
                    <Image src={max} fluid rounded />
                    <Image src={arkadiusz} fluid rounded />
                    <Image src={sageSquat} fluid rounded />
                </ImageGroup>

            </div>
        </>
    )
}

export default Layout