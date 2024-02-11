import "../styles/CoffeeItem.css"

interface CoffeeItemProps {
    name: string;
    weight: string;
    price: string;
    roastLevel: string;
    deleteCoffee: () => void;
};

const CoffeeItem = (props: CoffeeItemProps) => {
    return (
        <div className="coffee-item">
            <h3>{props.name}</h3>
            <p>Weight: {props.weight}g</p>
            <p>Price: {props.price}€</p>
            <p>Roast: {props.roastLevel}</p>
            <button onClick={() => props.deleteCoffee()}>Delete</button>
        </div>
    );
};

export default CoffeeItem;