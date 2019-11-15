import React from 'react';

interface QueryProps {
    images: {src: string, pred: number}[]
}

interface FormElement extends HTMLFormElement {
    date: HTMLInputElement;
    time: HTMLInputElement;
    target: string;
}

const handleSubmit: (Event: FormElement) => void = (event: FormElement) => {
    event.preventDefault();
    const data = new FormData(event);    // NOTE: you access FormData fields with `data.get(fieldName)`
    const dateStr = "" + data.get('date').toString();    
    const [month, day, year] = dateStr.split('/');
    const serverDate = `${year}-${month}-${day}`;    
    data.set('birthdate', serverDate);

    // TODO: Implement API request
};

/**
 * Component to deal with sending a user query
 * 
 * 
 */
const Query: React.FC<QueryProps> = (props) => {

    return(
        <div className="Query">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Date:
                    <input type="string" name="date" />
                </label>
                <label>
                    Time:
                    <input type="string" name="time" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

};

export default Query;