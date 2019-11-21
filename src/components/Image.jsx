import React, {useState} from 'react';
import Popup from './Popup';

/**
 * Component to render a single image, and handle it's state
 * 
 */
const Image = (props) => {
    console.log("Starting Image creation...");
    const [selected, setSelected] = useState(false);
    
    // State for the popup modal
    const [popup, setPopup] = useState(false);
    const handlePopupClose = () => setPopup(false);

    // destructure image object received
    const {
        image_filename,
        image_id,
        image_timestamp,
        image_date,
        image_time,
        image_file_size,
        image_eccentricity,
        image_orientation,
        image_major_axis_length,
        image_minor_axis_length,
        image_height,
        image_width,
        image_solidity,
        image_aspect_ratio,
        image_estimated_volume,
        image_area,
        ml_model_name,
        ml_user_labels,
        ml_prediction,
        ml_probability,
        ml_prediction_timestamp,
        annot_image_status,
        annot_image_tags,
        annot_machine_label,
        annot_human_label
    } = props.image;
    const imageDir = "../../public";

    // handle click event
    const onImageClick = (e) => {
        console.log("Click detected");
        if (e.altKey) {
            console.log("Alt-click detected");
            setPopup(true);
            
        } else {
            // call previous onClick
            props.onClick(e, !selected);
            
            // change selected state
            setSelected(!selected);
        }
    }

    console.log("Creating an image, finally!");

    return(
        <div className="Image">
            {selected ? (
            <div className="red-border">
                <img src={imageDir + image_filename} alt={image_id} onClick={onImageClick}/>
            </div>) : (
            <img src={imageDir + image_filename} alt={image_id} onClick={onImageClick}/>
            )}
            {popup ? <Popup image={props.image} handleClose={handlePopupClose}/> : <div></div>}
        </div>
    );

};

export default Image;