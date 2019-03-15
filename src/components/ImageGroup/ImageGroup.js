import React from 'react';

import classes from './ImageGroup.module.css';

const imageGroup = props => {
    let classArray = [classes.imageGroup, classes.imageGrid]
    switch (props.imageQuantity) {
        case 3:
            classArray.push(classes.threeImages);
            break;
        case 4:
            classArray.push(classes.fourImages);
            break;
        case 5:
            classArray.push(classes.fiveImages);
            break;
        case 6:
            classArray.push(classes.sixImages);
            break;
        default:
            classArray.push(classes.twoImages)
    }
    return (
        <div className={classArray.join(' ')}>
            {props.children}
        </div>
    )
}

export default imageGroup