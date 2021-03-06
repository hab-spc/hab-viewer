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
                    Date Start:
                    <input type="string" name="date-start" onChange={props.onDateChange}/>
                </label>
                <label>
                    End:
                    <input type="string" name="date-end" onChange={props.onDateChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

};

export default Query;