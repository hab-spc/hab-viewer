import React from 'react';


/**
 * Component to render a single image, and handle it's state
 * 
 */
const Image = (props) => {

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
        ml_prediction_timestamp,
        annot_image_status,
        annot_image_tags,
        annot_machine_label,
        annot_human_label
    } = props.image;
    const imageDir = "../../public";

    return(
        <div className="Image">
            <img src={imageDir + image_filename} alt={`This is a ${ml_prediction}`}/>
        </div>
    );

};

export default Image;