import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Popup = (props) => {

    console.log("Popup opened");

    // important deets: id, axisLengths, area, prediction, probability
    const {
        image_filename,
        image_id,
        image_major_axis_length,
        image_minor_axis_length,
        image_area,
        ml_prediction,
        ml_probability
    } = props.image;
    const imageDir = "../../public";

    return (
        <div className="Popup">
            <Modal.Dialog show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <img src={imageDir + image_filename} alt={image_id}/>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Image ID: {image_id}</li>
                        <li>Axes: {image_major_axis_length}, {image_minor_axis_length}</li>
                        <li>Area: {image_area}</li>
                        <li>ML Prediction: {ml_prediction} (Probability {ml_probability})</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
};

export default Popup;