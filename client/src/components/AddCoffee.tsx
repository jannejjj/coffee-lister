import React from "react";
import { useState } from "react";
import Coffee from "../types/Coffee";

interface AddCoffeeProps {
    setCoffees : (coffees: Array<Coffee>) => void;
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
        setCoffeeData({...coffeeData, [event.target.id]: event.target.value})
        console.log(coffeeData);
    }
    
    return (
        <div>
            <h3>Add a coffee to the list:</h3>
            <form
                onChange={handleFormChange}
                onSubmit={() => saveCoffee(coffeeData)}
            >
                <input id="name" placeholder="Name" />
                <input id="weight" placeholder="Weight" />
                <input id="price" placeholder="Price" />
                <input list="roast-options" type="drop" id="roastLevel" placeholder="Select Roast Level"/>
                <datalist id="roast-options">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                </datalist>
                <button type="submit">Add!</button>
            </form>

        </div>
    );
};

export default AddCoffee;