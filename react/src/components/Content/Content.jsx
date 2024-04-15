import React, { useState } from 'react';
import Form from '../Form/Form';
import Menu from '../Menu/Menu';

const Content = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = (e) => {
        e.preventDefault();
        setShowMenu(true);
    };

    if (showMenu) {
        return (
            <main className="content-menu">
                <Menu />
            </main>
        );
    }

    return (
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
                handleShowMenu={handleShowMenu}
            />
        </main>
    );
};

export default Content;
