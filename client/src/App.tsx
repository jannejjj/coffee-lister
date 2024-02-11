import React, {useState} from 'react';
import Header from './components/Header';
import './styles/App.css';
import CoffeeList from './components/CoffeeList';
import AddCoffee from './components/AddCoffee';
import Coffee from './types/Coffee';

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
