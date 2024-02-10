import React from "react";
import CoffeeItem from "./CoffeeItem";

export type CoffeeData = {
        name: string;
        weight: string;
        price: string;
        roastLevel: number;
    };

const savedCoffees : Array<CoffeeData> = [
    {name: "Juhla Mokka", weight: "500", price: "4.99", roastLevel: 2},
    {name: "Presidentti", weight: "500", price: "6.99", roastLevel: 3},
    {name: "Löfbergs", weight: "500", price: "3.99", roastLevel: 1},
    {name: "Saludo", weight: "500", price: "5.99", roastLevel: 2}
  ];

  // TODO: Fetch the coffee data from the server 

const CoffeeList = () => {
    return (
        <div>
            {savedCoffees.map((coffee) => {
                return (
                    <CoffeeItem
                        key={coffee.name}
                        name={coffee.name}
                        weight={coffee.weight}
                        price={coffee.price}
                        roastLevel={coffee.roastLevel}
                    />
                );
            })}
        </div>
    );
}

export default CoffeeList