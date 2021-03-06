import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Popup = (props) => {

    // console.log("Popup openedl; props = " + props);

    // important deets: id, axisLengths, area, prediction, probability
    const {
        image_filename,
        image_id,
        image_major_axis_length,
        image_minor_axis_length,
        image_area,
        ml_prediction,
        ml_probability,
        ml_user_labels
    } = props.image;
    const imageDir = ".";
    // console.log("props.show = " + props.show);

    return (
        <div className="Popup">
            <Modal show={props.show} onHide={props.handlePopupClose} centered size="sm">
                <Modal.Header className="text-center">
                    <img src={imageDir + image_filename} alt={image_id}/>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Image ID: {image_id}</li>
                        <li>Axes: {image_major_axis_length}, {image_minor_axis_length}</li>
                        <li>Area: {image_area}</li>
                        <li>ML Prediction: {ml_prediction} (Probability {ml_probability})</li>
                        <li>Label: {ml_user_labels}</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={props.handlePopupClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default Popup;
