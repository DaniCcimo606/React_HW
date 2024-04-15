import React, { useState } from 'react';
import PizzaCounter from '../PizzaCounter/PizzaCounter';

const MenuItem = (props) => {
    const { name, unitPrice, imageUrl, ingredients, soldOut } = props;

    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsVisible(false);
    };
    const handleButtonClickClose = (e) => {
        e.preventDefault();
        setIsVisible(true);
    };

    return (
        <li className="pizza">
            <img src={imageUrl} alt={name} className="pizza__image" />
            <div className="pizza__info">
                <p className="pizza__name">{name}</p>
                <p className="pizza__ingredients">{ingredients.join(', ')}</p>
                {soldOut ? (
                    <div className="pizza__actions">
                        <p className="pizza__price">Sold out</p>
                    </div>
                ) : (
                    <div className="pizza__actions">
                        <p className="pizza__price">€{unitPrice}</p>
                        {isVisible && (
                            <button
                                className="button"
                                onClick={handleButtonClick}>
                                Add to cart
                            </button>
                        )}
                        {!isVisible && (
                            <PizzaCounter closeClick={handleButtonClickClose} />
                        )}
                    </div>
                )}
            </div>
        </li>
    );
};

export default MenuItem;
