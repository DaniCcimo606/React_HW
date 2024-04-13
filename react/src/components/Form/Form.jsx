const Form = (props) => {
    const { btnText, inputType, placeholder } = props;

    return (
        <div className="login-form">
            <input type={inputType} placeholder={placeholder} />
            <button>{btnText}</button>
        </div>
    );
};

export default Form;
