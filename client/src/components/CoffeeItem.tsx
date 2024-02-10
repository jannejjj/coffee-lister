interface CoffeeItemProps {
    name: string;
    weight: string;
    price: string;
    roastLevel: number;
};

const CoffeeItem = (props: CoffeeItemProps) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Weight: {props.weight}g</p>
            <p>Price: {props.price}€</p>
            <p>Roast: {props.roastLevel}</p>
        </div>
    );
};

export default CoffeeItem;