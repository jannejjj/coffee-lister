import React from "react";
import { useState } from "react";

type Coffee = {
    name: string;
    weight: string;
    price: string;
    roastLevel: number;
};

const AddCoffee = () => {

    const [coffeeData, setCoffeeData] = useState({} as Coffee);

    function handleFormChange(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        setCoffeeData({...coffeeData, [event.target.id]: event.target.value})
    }

    function saveCoffee(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(coffeeData.name, coffeeData.weight, coffeeData.price, coffeeData.roastLevel);

        // TODO: Send the coffee data to the server
    };

    
    return (
        <div>
            <h1>Add a coffee to the list:</h1>
            <form onChange={handleFormChange} onSubmit={saveCoffee}>
                <input id="name" placeholder="Name" />
                <input id="weight" placeholder="Weight" />
                <input id="price" placeholder="Price" />
                <input id="roastLevel" placeholder="Roast Level" />
                <button>Add!</button>
            </form>

        </div>
    );
};

export default AddCoffee;