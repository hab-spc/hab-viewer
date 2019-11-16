import React from 'react';
import Image from './Image';


/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic = (props) => {

    return(
        <div className="Mosaic">
            
            {props.images.map((elem) => {
                return <Image image={elem}/>
                })
            }
        </div>
    );

};

export default Mosaic;