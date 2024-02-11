import React, {useState} from "react";
import { useEffect} from "react";
import CoffeeItem from "./CoffeeItem";
import Search from "./Search";
import Error from "./Error";
import Coffee from "../types/Coffee";
import "../styles/CoffeeList.css";

interface CoffeeListProps {
    coffees: Array<Coffee>;
    setCoffees: (coffees: Array<Coffee>) => void;
}

const CoffeeList = ({coffees, setCoffees}: CoffeeListProps) => {

    const [msg, setMsg] = useState("");
    const [search, setSearch] = useState("");

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
                setMsg(json.error);
            } else {
                setCoffees(json);
            }
        })
    }, [setCoffees]);


    return (
        <div>
            {msg !== "" // If there's an error message, display it. Otherwise, display the coffee list
            ?
            <Error msg={msg}/>
            :
            <div>
                <Search setSearch={setSearch}/>
                <div className="coffee-list">


                {coffees.map((coffee) => {
                    // If search is empty or the coffee name includes search, display the coffee
                    if (search.trim() === "" || coffee.name.toLowerCase().includes(search.toLowerCase())) {
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
                    } else {
                        return null;
                    }
                })}
                </div>
            </div>}
        </div>
    );
}

export default CoffeeList