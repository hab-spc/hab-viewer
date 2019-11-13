import React from 'react';

interface QueryProps {
    images: {src: string, pred: number}[]
}

interface FormElement extends HTMLFormElement {
    date: HTMLInputElement;
    time: HTMLInputElement;
    target: string;
}

const handleSubmit: React.FC = (event: FormElement) => {
    event.preventDefault();
    const data = new FormData(event);    // NOTE: you access FormData fields with `data.get(fieldName)`    
    const [month, day, year] = data.get('date').split('/');
    const serverDate = `${year}-${month}-${day}`;    data.set('birthdate', serverDate);

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
                    <input type="date" name="date" />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

};

export default Query;