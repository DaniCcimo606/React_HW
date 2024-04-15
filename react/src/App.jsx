import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import './index.css';
import './login.css';
import './menu.css';
import './welcome.css';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header logoText="Pizza Day" />
                <Routes>
                    <Route path="/" element={<Welcome />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
