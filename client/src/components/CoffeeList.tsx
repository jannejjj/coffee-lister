import React, {useState} from "react";
import { useEffect} from "react";
import CoffeeItem from "./CoffeeItem";
import Coffee from "../types/Coffee";
import "../styles/CoffeeList.css";

interface CoffeeListProps {
    coffees: Array<Coffee>;
    setCoffees: (coffees: Array<Coffee>) => void;
}

const CoffeeList = ({coffees, setCoffees}: CoffeeListProps) => {

    const [msg, setMsg] = useState("");

    function deleteCoffee(id: string) {
        fetch("coffees/delete/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.error) {
                console.log(json.error);
                setMsg(json.error);
            } else {
                setCoffees(json);
            }
        })
      };

    useEffect(() => {
        fetch("/coffees")
        .then((response) => response.json())
        .then((json) => {
            if (json.error) {
                console.log(json.error);
                setMsg(json.error);
            } else {
                setCoffees(json);
            }
        })
    }, [setCoffees]);

    return (
        <div className="coffee-list">
            {msg !== "" ? <h3>{msg}</h3> : null}
            {coffees.slice(0).reverse().map((coffee) => {
                console.log(coffee.id);
                return (
                    <CoffeeItem
                        key={coffee.id}
                        name={coffee.name}
                        weight={coffee.weight}
                        price={coffee.price}
                        roastLevel={coffee.roastLevel}
                        deleteCoffee={() => deleteCoffee(coffee.id)}
                    />
                );
            })}
        </div>
    );
}

export default CoffeeList