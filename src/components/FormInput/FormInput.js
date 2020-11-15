import React from 'react';

import './FormInput.styles.scss';

const formInput = ({ handleChange, label, ...otherProps }) => (
<div className="group">
    <input className="formInput" onChange={handleChange} {...otherProps} />
{label ? (
<label 
    className={`${otherProps.value.length ? 'shrink' : ''} formInputLabel`}>
        {label}
    </label>)
    : null
}
</div>
);
export default formInput;