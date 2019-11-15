import React from 'react';

/**
 * Component to deal with sending a user query
 *  
 */
const Query = (props) => {

    return(
        <div className="Query">
            <form onSubmit={props.handleDateSubmit}>
                <label>
                    Date:
                    <input type="string" name="date" onChange={props.onDateChange}/>
                </label>
                <label>
                    Time:
                    <input type="string" name="time" onChange={props.onTimeChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

};

export default Query;