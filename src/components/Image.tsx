import React from 'react';

interface ImgProps {
    src: string, pred: number
}

/**
 * Component to render a single image, and handle it's state
 * 
 */
const Image: React.FC<ImgProps> = (props) => {

    
    const {src, pred} = props;
    const imageDir = "../../public";

    return(
        <div className="Image">
            <img src={require(imageDir + src)}/>
            <br />{pred}<br/>
        </div>
    );

};

export default Image;