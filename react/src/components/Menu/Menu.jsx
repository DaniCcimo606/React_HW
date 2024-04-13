import React from 'react';
import pizzas from '../../data';

const Menu = () => {
    return (
        <ul>
            {pizzas.map((obj) => {
                const { id, name, unitPrice, imageUrl, ingredients, soldOut } =
                    obj;
                return (
                    <li key={id} className="pizza">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="pizza__image"
                        />
                        <div className="pizza__info">
                            <p className="pizza__name">{name}</p>
                            <p className="pizza__ingredients">{ingredients}</p>
                            {soldOut ? (
                                <div className="pizza__actions">
                                    <p className="pizza__price">Sold out</p>
                                </div>
                            ) : (
                                <div className="pizza__actions">
                                    <p className="pizza__price">€{unitPrice}</p>
                                    <button className="button">
                                        Add to cart
                                    </button>
                                </div>
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
