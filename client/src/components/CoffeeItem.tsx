export type CoffeeItemProps = {
    name: string;
    weight: string;
    price: string;
    roastLevel: number;
};

const CoffeeItem = (props: CoffeeItemProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Weight: {props.weight}g</p>
            <p>Price: {props.price}€</p>
            <p>Roast: {props.roastLevel}</p>
        </div>
    );
};

export default CoffeeItem;