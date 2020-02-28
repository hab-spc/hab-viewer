import React, {useState} from 'react';
import axios from 'axios';

/**
 * Adding a class to the annotation list
 */
const AddClass = (props) => {
    
    // state
    const [newClass, setNewClass] = useState("");

    // send postRequest
    const handleAddClass = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:3002/api/annot-list/${newClass}`)
            .then((res) => {
                props.setAnnotClassList(res.data.classList);
            });
    }

    // change based on input
    const onClassChange = (e) => {
        setNewClass(e.target.value);
    }
    
    // render
    return (
        <div className="AddClass">
            <form onSubmit={handleAddClass}>
                <label>
                    Add a Class :
                    <input type="text" value={newClass} onChange={onClassChange} />
                </label>
                <input type="submit" value="Add Class"></input>
            </form>
        </div>
    );
}

export default AddClass;
