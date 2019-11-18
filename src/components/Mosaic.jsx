import React, {useState} from 'react';
import Image from './Image';
import axios from 'axios';

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

        e.preventDefault();

        // alert about annotation
        const confirm = alert(`You annotated ${selectImgs.length} Images as ${props.currAnnotClass}`);

        if (confirm) {
            // send post request
            axios
                .post("http://localhost:3002/api/annot", selectedImgs)
                .then( res => {
                    console.log(res);
                });
            
            // TODO clear all selections 
        }
        
    }

    // add selected image to annotation list
    const selectImage = (e, selected) => {

        if(selected) {
            console.log(`selected image ${e.target}`);
            addToImgs(selectedImgs.concat([e.target.alt]));
        } else {
            console.log(`deselected image ${e.target}`);
            addToImgs(selectedImgs.filter(img => img !== e.target.alt));
        }
    }

    // filter images by current class
    let imgsToRender = []
    if (props.currClass !== "All") {
        imgsToRender = props.images.filter(img => (img.annot_human_label != null && img.annot_human_labl === props.currClass) || img.ml_prediction === props.currClass);
    } else {
        imgsToRender = props.images;
    }

    // TODO add redborder
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