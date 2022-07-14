import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../Services/Actions/todosActions';
const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch]);

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error?.message}</h2>
    }
    return (
        <div>
            {
                todos.map((todo,index) => <div key={index}>
                    <h3>{todo.title}</h3>
                </div>)
            }
        </div>
    );
};

export default Todos;