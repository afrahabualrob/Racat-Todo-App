import React from 'react'

export const AddButton = ({ value, disabled, onClick }) => {
  return (
    <div>
      <button type=" button" id="" onClick={onClick} disabled={disabled}>
        {value}
      </button>
    </div>
  );
};
