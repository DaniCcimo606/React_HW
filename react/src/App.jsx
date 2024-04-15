import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './index.css';
import './login.css';
import './menu.css';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header text="Pizza Day" />
                <Content />
            </div>
        </>
    );
}

export default App;
