import React, { useState } from 'react';

const Form = (props) => {
    const { btnText, inputType, placeholder, handleShowMenu } = props;

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form className="login-form" onSubmit={handleShowMenu}>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
            />
            <button type="submit">{btnText}</button>
        </form>
    );
};

export default Form;
