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
import lake from './images/e-city-lake.JPG'
import lake2 from './images/e-city-lake-2.JPG';
import people from './images/will-humans.JPG';
import car from './images/car-eldorado.JPG'
import carCloseUp from './images/car-up-front.JPG';
import house from './images/e-city-house.JPG'
import seattle from './images/seattle-1.JPG'

import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <Jumbotron fluid>
                <h1>Universe, meet Will Lucas.</h1>
                <h5>I'm an adventurous Portland native and triple threat.</h5>
            </Jumbotron>
            <div className={classes.wrapper}>
                <div className={[classes.imageWrapper, classes.offsetY, classes.grid].join(' ')}>
                <Image src={arkadiusz} fluid rounded/>
                <Image src={sageSquat} fluid rounded/>
                    {/* <ImageGroup imageURLs={[arkadiusz, sageSquat]}>
                    </ImageGroup> */}
                    <div className={[classes.caption, classes.pullDown].join(' ')}>
                        fitness photographer
                        <div className={classes.stripe} />
                    </div>
                </div>
                <div className={classes.imageWrapper}>
                    <Image src={willSquat} fluid rounded />
                    <div className={[classes.caption, classes.colorPowerliftPink, classes.alignCenter, classes.pullDownLess].join(' ')}>
                        powerlifter
                        <div className={[classes.stripe, classes.bgBlue].join(' ')} />
                    </div>

                </div>
                <div className={classes.imageWrapper}>
                    <Image src={willFlex} fluid rounded />
                    <div className={[classes.caption, classes.colorTeal, classes.pullDownMuchLess].join(' ')}>
                        occasional model.
                    </div>

                </div>
                <div className={classes.galleryPreface}>
                    <h3>Sometimes I take pictures of the things I see..</h3>
                </div>
                <ImageGroup 
                imageQuantity={"experiment"}
                imageURLs={[house, car, seattle, cameraSelfie, face, lake, carCloseUp, max, lake2, people]}>
                    <Image src={house} fluid rounded />
                <Image src={car} fluid rounded />
                <Image src={seattle} fluid rounded />
                <Image src={cameraSelfie} fluid rounded />
                <Image src={face} fluid rounded />
                <Image src={lake} fluid rounded />
                <Image src={carCloseUp} fluid rounded />
                <Image src={max} fluid rounded />
                <Image src={lake2} fluid rounded />
                <Image src={people} fluid rounded />
                </ImageGroup>
        </div>
        </>
    )
}

export default Layout