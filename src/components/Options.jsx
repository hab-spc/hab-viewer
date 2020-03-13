import React, {useState} from 'react';
import AddClass from './AddClass';

/**
 * Component to handle minor options
 * 
 */
const Options = (props) => {

    // a dropdown, or sidebar
    return (
        <div className="Options">
            <AddClass setAnnotClassList={props.setAnnotClassList}/>
        </div>
    );

}

export default Options;