import React from 'react';

/**
 * Component to deal with sending a user query
 *
 */
const Annotate = props => {
  return (
    <div className="Annotate">
      <label>
        {props.expert ? 'Validate' : 'Annotate'} as Class:
        <select
          value={props.currAnnotClass}
          onChange={props.onAnnotClassChange}
        >
          {props.classList.map(classStr => (
            <option key={classStr} value={classStr}>
              {classStr}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Annotate;
