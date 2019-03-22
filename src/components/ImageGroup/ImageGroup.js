import React, { useState, useContext, useEffect } from 'react';
import Image from '../Image/Image';

import classes from './ImageGroup.module.css';

import backdropContext from '../Backdrop/BackdropContext';

// MOST RECENT: I think this would be much simpler if I refactored it as a class. Hooks and context are fun and all, but this is not the ideal use case. It is growing bloated and convoluted to achieve what is simply achieved with known tools.

// SECOND MOST RECENT: Need to get the full <Image /> in the fullsizeimage property in state.

// I need to document this well, it's getting a bit clusterfucky. Next on the list is building gallery functionality that will allow someone to click arrows to go through the images.

// I'll also need a componentDidUpdate sort of thing that will determine if there's a full size image and if there is, to add a way to thumb around through the array.

const imageGroup = ({ imageURLs }) => {
    // backdropClosed is state information, toggle is the function to change state.
    const { backdropClosed, toggle } = useContext(backdropContext);
    // Positioned first so the method is defined when state is initialized.
    const imageClickHandler = event => {
        toggle({ backdropClosed: false });
        const idOfImg = event.target.src;
        console.log(event, idOfImg);
        event.persist();
        const newState = setState((oldState) => {
            return ({
                ...oldState, displayingFullImage: event.target.src
            })
        })
        console.log(state);
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
                fullsize={state.displayingFullImage === url ? true : false}
                fluid rounded></Image>
        })
    }

    // setState((oldState) => {
    //     return {
    //         ...state,
    //         images: determineHowImagesRender(imageURLs)
    //     }
    // })

    let classArray = [classes.imageGroup, state.displayingFullImage ? classes.fullSizeContainer : '']
    return (
        <div className={classArray.join(' ')}>
            {useEffect(() => {
                determineHowImagesRender(imageURLs);
            }) || determineHowImagesRender(imageURLs)}
            {/* {state.images.filter(image => {
                // 
                return image !== state.displayingFullImage? true : false;
            })} */}
        </div>
    )
}

export default imageGroup