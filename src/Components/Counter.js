import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/counterActions';
const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    // const handleIncrement = () => {
    //     dispatch(incrementCounter())
    // };
    return (
        <div>
            <button onClick={() => dispatch(incrementCounter())}>Increment</button>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
            <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </div>
    );
};

export default Counter;