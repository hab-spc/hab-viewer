import React from 'react';

/**
 * Component to deal with sending a user query
 *  
 */
const Filter = (props) => {

    return(
        <div className="Filter">
            <label>
                Filter by Class:
                <select value={props.currClass} onChange={props.onClassChange}>
                    {props.classList.map(classStr => <option value={classStr}>{classStr}</option>)}
                </select>
            </label>
        </div>
    );

};

export default Filter;