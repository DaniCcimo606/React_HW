import Form from '../../components/Form/Form';

const Login = () => {
    return (
        <main className="login">
            <h1 className="title">
                The best pizza.
                <br />
                <span className="text-yellow">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            <p className="sub-title">
                👋 Welcome! Please start by telling us your name:
            </p>
            <Form
                inputType="text"
                placeholder="Your full name"
                btnText="Login"
            />
        </main>
    );
};

export default Login;
