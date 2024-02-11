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
            {msg !== ""
            ?
            <Error msg={msg}/>
            :
            <div>
                <Search
                    setMsg={setMsg}
                    setCoffees={setCoffees}
                />
                <div className="coffee-list">

                {coffees.map((coffee) => {
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
            </div>}
        </div>
    );
}

export default CoffeeList