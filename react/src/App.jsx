import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './index.css';
import './login.css';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header text="Pizza Day" />
                <main className="content">
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
            </div>
        </>
    );
}

export default App;
