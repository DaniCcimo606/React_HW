import React, { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        try {
            const getPizzas = async () => {
                const res = await fetch(
                    'https://react-fast-pizza-api.onrender.com/api/menu'
                );
                const { data } = await res.json();
                console.log(data);
                setPizzas(data);
            };

            getPizzas();
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    return (
        <ul className="menu-pizzas">
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
