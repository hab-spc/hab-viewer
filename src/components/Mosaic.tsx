import React from 'react';
import Image from './Image';

interface MosProps {
    images: {src: string, pred: number}[]
}

/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic: React.FC<MosProps> = (props) => {

    return(
        <div className="Mosaic">
            
            {props.images.map((elem) => {
                return <Image src={elem.src} pred={elem.pred}/>
                })
            }
        </div>
    );

};

export default Mosaic;