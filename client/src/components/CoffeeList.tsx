import { useEffect} from "react";
import CoffeeItem from "./CoffeeItem";

interface CoffeeListProps {
    coffees: Array<Coffee>;
    setCoffees: (coffees: Array<Coffee>) => void;
}

type Coffee = {
        name: string;
        weight: string;
        price: string;
        roastLevel: number;
};

const CoffeeList = ({coffees, setCoffees}: CoffeeListProps) => {

    useEffect(() => {
        fetch("/coffees")
        .then((response) => response.json())
        .then((json) => {
            if (json.error) {
                console.log(json.error);
            } else if (json.length === 0){
                console.log("No coffees in db yet.");
            } else {
                setCoffees(json);
            }
        })
    }, [setCoffees]);

    return (
        <div>
            {coffees.map((coffee) => {
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