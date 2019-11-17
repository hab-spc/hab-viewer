import React from 'react';

/**
 * Component to deal with sending a user query
 *  
 */
const Annotate = (props) => {

    return(
        <div className="Annotate">
            <form onSubmit={props.handleAnnotate}>
                <label>
                    Annotate as Class:
                    <select value={props.currAnnotClass} onChange={props.onAnnotClassChange}>
                        {props.classList.map( classStr => <option value={classStr}>{classStr}</option>)}
                    </select>
                </label>
                <input type="submit" value="Annotate"></input>
            </form>
        </div>
    );

};

export default Annotate;