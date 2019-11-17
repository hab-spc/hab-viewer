import React, {useState} from 'react';
import Image from './Image';

/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic = (props) => {

    // define state
    const [selectedImgs, addToImgs] = useState([]);

    // update annotation in DB
    const handleAnnotate = (e) => {
        // TODO send request
        e.preventDefault();
        console.log("annotate");
        console.log(selectedImgs);
    }

    // add selected image to annotation list
    const selectImage = (e) => {
        console.log(`selected image ${e.target}`);

        // TODO: remove image from list if clicked again
        addToImgs(selectedImgs.concat([e.target.alt]));
    }

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
                    return <Image key={img.image_id} image={img} onClick={selectImage}/>
                })
            }
            <form onSubmit={handleAnnotate}>
                <input type="submit" value="Annotate"></input>                
            </form>
        </div>
    );

};

export default Mosaic;