import React, { useState } from 'react';

const PizzaCounter = (props) => {
    const { closeClick } = props;

    const [counter, setCounter] = useState(1);

    return (
        <div className="pizza-counter">
            <button
                onClick={() => setCounter(counter - 1)}
                disabled={counter === 1}>
                -
            </button>
            <span className="pizza-count">{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button className="button-delete" onClick={closeClick}>
                Delete
            </button>
        </div>
    );
};

export default PizzaCounter;
