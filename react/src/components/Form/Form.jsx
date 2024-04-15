import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
    const { btnText, inputType, placeholder } = props;

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form className="login-form">
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
            />
            <Link to="/menu">
                <button type="submit">{btnText}</button>
            </Link>
        </form>
    );
};

export default Form;
