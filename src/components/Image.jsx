import React from 'react';


/**
 * Component to render a single image, and handle it's state
 * 
 */
const Image = (props) => {

    
    const {src, pred} = props;
    const imageDir = "../../public/";

    return(
        <div className="Image">
            <img src={imageDir + src}/>
            <br />{pred}<br/>
        </div>
    );

};

export default Image;