import React from 'react';
import pizzas from '../../data';
import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {
    return (
        <ul>
            {pizzas.map((obj) => {
                const { id, name, unitPrice, imageUrl, ingredients, soldOut } =
                    obj;
                return (
                    <MenuItem
                        key={id}
                        name={name}
                        unitPrice={unitPrice}
                        imageUrl={imageUrl}
                        ingredients={ingredients}
                        soldOut={soldOut}
                    />
                );
            })}
        </ul>
    );
};

export default Menu;
