import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import CoffeeList from './components/CoffeeList';
import AddCoffee from './components/AddCoffee';

type Coffee = { 
  name: string;
  weight: string;
  price: string;
  roastLevel: number;
};


function App() {

  const [coffees, setCoffees] = useState<Array<Coffee>>([]);

  return (
    <div className="App">
      <Header />
      <AddCoffee setCoffees={setCoffees}/>
      <CoffeeList coffees={coffees} setCoffees={setCoffees}/>
    </div>
  );
}

export default App;
