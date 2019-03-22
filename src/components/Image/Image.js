import React from 'react';

import classes from './Image.module.css';

const Image = ({src, rounded, fluid, clickHandler, alt, id, fullsize}) => {
    let classList = [classes.Image];
    classList.push(rounded? classes.rounded : '');
    classList.push(fluid? classes.fluid : '');
    classList.push(fullsize? classes.fullsize : '');
    return <img id={id} src={src} onClick={clickHandler} className={classList.join(' ')}alt={alt} />
}

export default Image;