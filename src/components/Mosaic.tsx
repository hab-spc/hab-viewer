import React from 'react';

interface MosProps {
    images: string[]
}

/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic: React.FC<MosProps> = (props) => {

    const [src, pred] = props.images;

    return(
        <div className="Mosaic">
            <div className="Image">
            <img src={require("../../public/"  + src)} />
            <br /> {pred} <br />
            </div>
        </div>
    );

};

export default Mosaic;