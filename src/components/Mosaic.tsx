import React from 'react';

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
                return <div className="Image">
                       <img src={require("../../public/" + elem.src)}/>
                       <br />{elem.pred}<br/>
                       </div>;
                })
            }
        </div>
    );

};

export default Mosaic;