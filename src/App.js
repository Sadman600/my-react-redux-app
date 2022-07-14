import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Todos from './Components/Todos';
const App = () => {

  return (
    <div className='App'>
      <h1>Welcome to React-Redux</h1>
      <Counter></Counter>
      <Todos></Todos>
    </div>
  );
};

export default App;