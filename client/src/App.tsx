import React from 'react';
import Header from './components/Header';
import './App.css';
import CoffeeList, { CoffeeData } from './components/CoffeeList';
import AddCoffee from './components/AddCoffee';

function App() {
  return (
    <div className="App">
      <Header />
      <AddCoffee />
      <CoffeeList/>
    </div>
  );
}

export default App;
