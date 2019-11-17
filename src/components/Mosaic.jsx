import React from 'react';
import Image from './Image';


/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic = (props) => {

    // filter images by current class
    let imgsToRender = []
    if (props.currClass !== "All") {
        imgsToRender = props.images.filter(img => img.ml_prediction === props.currClass);
    } else {
        imgsToRender = props.images;
    }

    return(
        <div className="Mosaic">
            { imgsToRender.map((img) => {
                return <Image key={img.image_id} image={img}/>
                })   
            }
        </div>
    );

};

export default Mosaic;