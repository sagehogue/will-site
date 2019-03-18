import React, { useState, useContext, useEffect } from 'react';
import Image from '../Image/Image';

import classes from './ImageGroup.module.css';

import backdropContext from '../Backdrop/BackdropContext';

// MOST RECENT: Need to get the full <Image /> in the fullsizeimage property in state.

// I need to document this well, it's getting a bit clusterfucky. Next on the list is building gallery functionality that will allow someone to click arrows to go through the images.

// I'll also need a componentDidUpdate sort of thing that will determine if there's a full size image and if there is, to add a way to thumb around through the array.

const imageGroup = ({ imageURLs }) => {
    // backdropClosed is state information, toggle is the function to change state.
    const { backdropClosed, toggle } = useContext(backdropContext);
    // Positioned first so the method is defined when state is initialized.
    const imageClickHandler = event => {
        toggle({ backdropClosed: false });
        const idOfImg = event.target.id;
        const newState = setState(oldState => {
            return ({
                ...oldState, displayingFullImage: event.target.id
            })
        })
    }
    const [state, setState] = useState({
        displayingFullImage: false,
        numberOfImages: imageURLs.length,
    })


    const determineHowImagesRender = (imageURLs) => {
        
        return imageURLs.map((url, index) => {
            return <Image
                clickHandler={imageClickHandler}
                src={url}
                key={index}
                id={index}
                fullsize={state.displayingFullImage !== false && url !== state.displayingFullImage.props.src ? true : false}
                fluid rounded></Image>
        })
    }

    let classArray = [classes.imageGroup]
    return (
        <div className={classArray.join(' ')}>
            {determineHowImagesRender(imageURLs)}

            {/* {state.images.filter(image => {
                // 
                return image !== state.displayingFullImage? true : false;
            })} */}
        </div>
    )
}

export default imageGroup