import React from "react";
import { useState } from "react";
import Error from "./Error";
import Coffee from "../types/Coffee";
import "../styles/AddCoffee.css";

interface AddCoffeeProps {
    setCoffees : (coffees: Array<Coffee>) => void;
};

const AddCoffee = ( props: AddCoffeeProps) => {

    const [msg, setMsg] = useState("");

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
                setMsg(json.error);
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
        <div className="add-coffee">
            <h4>Add a coffee to the list:</h4>
            <form
                onChange={handleFormChange}
                onSubmit={() => saveCoffee(coffeeData)}
            >
                <fieldset className="text-inputs">
                    <input id="name" placeholder="Name" required/>
                    <input id="weight" placeholder="Weight in grams" required/>
                    <input id="price" placeholder="Price in €" required/>
                </fieldset>
                <fieldset className="radio-inputs">
                    <legend>Roast Level:</legend>
                    <label> 1
                    <input type="radio" id="roastLevel" value="1" name="roastLevel" required/>
                    </label>
                    <label> 2
                    <input type="radio" id="roastLevel" value="2" name="roastLevel" />
                    </label>
                    <label> 3
                    <input type="radio" id="roastLevel" value="3" name="roastLevel" />
                    </label>
                    <label> 4
                    <input type="radio" id="roastLevel" value="4" name="roastLevel" />
                    </label>
                    <label> 5
                    <input type="radio" id="roastLevel" value="5" name="roastLevel" />
                    </label>
                </fieldset>
                <button type="submit">Add!</button>
                {msg !== "" ? <Error msg={msg}/> : null}
            </form>
        </div>
    );
};

export default AddCoffee;