import React from "react";
import "../styles/Search.css";
import Coffee from "../types/Coffee";

interface SearchProps {
    setMsg: (msg: string) => void;
    setCoffees: (coffees: Array<Coffee>) => void;
}

const Search = ({setMsg, setCoffees} : SearchProps) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

            const phrase = event.target.value;

            if (phrase.trim().length !== 0) {
                fetch("coffees/search/" + phrase)
                .then((response) => response.json())
                .then((json) => {
                    if (json.error) {
                        setMsg(json.error);
                    } else {
                        setCoffees(json);
                    }
                });
            } else {
                fetch("/coffees")
                .then((response) => response.json())
                .then((json) => {
                    if (json.error) {
                        setMsg(json.error);
                    } else {
                        setCoffees(json);
                    }
                })
            }
    }

    return (
        <div className="search-container">
            <h5>Search saved coffees:</h5>
            <input onChange={handleChange} className="search" placeholder="Enter coffee name..."/>
        </div>
    );
};

export default Search;