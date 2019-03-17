import React, { useState, useContext } from 'react';
import Image from '../Image/Image';

import classes from './ImageGroup.module.css';

import backdropContext from '../Backdrop/BackdropContext';

// Consider how and where to implement logic to hold throw in a backdrop. It needs to sit on the top layer, so I could just use some context to access that. Create a context in the layout page and access it here to keep state out there consistent!

const imageGroup = ({imageURLs}) => {
    const {backdropClosed, toggle} = useContext(backdropContext);
    // toggle(true);
    console.log(backdropClosed)
    const imageClickHandler = event => {
        toggle({backdropClosed: false});
        // const backdropContext = React.createContext();
        const idOfImg = event.target.id;
        const newState = setState(oldState => {
            return ({
                ...oldState, displayingFullImage: oldState.images.filter(el => {
                    return el.props.id === idOfImg
                })
            })
        })

    }
    const [state, setState] = useState({
        numberOfImages: imageURLs.length,
        images: imageURLs.map((url, index) => {
            return <Image clickHandler={imageClickHandler} src={url} key={index} id={index} fluid rounded></Image>
        }),
        displayingFullImage: false,
    })
    React.createContext();
    let classArray = [classes.imageGroup]

    return (
        // <backdropContext.Consumer>
            <div className={classArray.join(' ')}>
                {state.images}
            </div>
        // </backdropContext.Consumer>
    )
}

export default imageGroup