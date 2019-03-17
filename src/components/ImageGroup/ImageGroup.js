import React, { useState, useContext } from 'react';
import Image from 'react-bootstrap/Image';

import classes from './ImageGroup.module.css';

const imageGroup = ({ imageQuantity, imageURLs }) => {
    const [state, setState] = useState({
        numberOfImages: imageURLs.length,
        images: imageURLs.map((url, index) => {
            return <Image onClick={imageClickHandler} src={url} key={index} id={index} fluid rounded></Image>
        }),
        displayingFullImage: false,
    })

    const imageClickHandler = event => {
        const idOfImg = event.target.id;
        const newState = setState(oldState => {
            return {
                ...oldState, displayingFullImage: oldState.images.filter(el => {
                    return el.props.id === idOfImg
                })
            }
        })
        console.log(idOfImg, newState)
    }

    console.log(imageURLs);
    React.createContext();
    let classArray = [classes.imageGroup]

    return (
        <div className={classArray.join(' ')}>
            {state.images}
        </div>
    )
}

export default imageGroup