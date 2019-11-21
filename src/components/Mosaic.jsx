import React, {useState} from 'react';
import Image from './Image';
import Popup from './Popup';
import axios from 'axios';

/**
 * Component to deal with displaying images
 * 
 * 
 */
const Mosaic = (props) => {

    // define state
    const [selectedImgs, addToImgs] = useState([]);

    // Define state for the popup modal
    const [popupImage, setPopupImage] = useState(null);
    const handlePopupOpen = (imageArg) => setPopupImage(imageArg);
    const handlePopupClose = () => setPopupImage(null);
    console.log("Popup state set to " + popupImage);

    // update annotation in DB
    const handleAnnotate = (e) => {

        e.preventDefault();

        // alert about annotation
        const conf = window.confirm(`You annotated ${selectedImgs.length} Images as ${props.currAnnotClass}`);

        if (conf) {
            // send post request
            axios
                .post("http://localhost:3002/api/annot", {"imgs": selectedImgs, "class": props.currAnnotClass})
                .then( res => {
                    console.log(res);
                    // rerender Mosaic
                    const imgs = props.images.map((img) => {
                        if (selectedImgs.includes(img.image_id)){
                            img.ml_user_labels = props.currAnnotClass;
                            console.log(img);
                        } 
                        return img;
                    });

                    props.reRender(imgs);
                });
            
            // TODO clear all selections 
            addToImgs([]);
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
        imgsToRender = props.images.filter((img) => {
            if (img.ml_user_labels != null && img.ml_user_labels === props.currClass) return true;
            else if (img.ml_user_labels == null && img.ml_prediction === props.currClass) return true;
        });
    } else {
        imgsToRender = props.images;
    }

    return(
        <div className="Mosaic">            
            {popupImage != null ? 
                <Popup image={popupImage} handleClose={handlePopupClose} centered/> : 
                <div></div>}

            { imgsToRender.map((img) => {
                    return <Image key={img.image_id} image={img} 
                            onClick={selectImage} handlePopupOpen={handlePopupOpen}/>
                })
            }
            <form onSubmit={handleAnnotate}>
                <input type="submit" value="Annotate"></input>                
            </form>
        </div>
    );

};

export default Mosaic;