import React from "react";
import { useState } from "react";

interface AddCoffeeProps {
    setCoffees : (coffees: Array<Coffee>) => void;
};

type Coffee = {
    name: string;
    weight: string;
    price: string;
    roastLevel: number;
};

const AddCoffee = ( props: AddCoffeeProps) => {

    function saveCoffee(coffeeData: object) {
        fetch("coffees/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffeeData),
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.error) {
                console.log(json.error);
            } else {
                console.log(json);
                props.setCoffees(json);
            }
        
        })
      };

    const [coffeeData, setCoffeeData] = useState({});

    function handleFormChange(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        setCoffeeData({...coffeeData, [event.target.id]: event.target.value})
    }
    
    return (
        <div>
            <h2>Add a coffee to the list:</h2>
            <form
                onChange={handleFormChange}
                onSubmit={() => saveCoffee(coffeeData)}
            >
                <input id="name" placeholder="Name" />
                <input id="weight" placeholder="Weight" />
                <input id="price" placeholder="Price" />
                <input id="roastLevel" placeholder="Roast Level" />
                <button type="submit">Add!</button>
            </form>

        </div>
    );
};

export default AddCoffee;