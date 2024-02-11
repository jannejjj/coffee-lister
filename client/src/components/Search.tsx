import React from "react";
import "../styles/Search.css";

interface SearchProps {
    setSearch: (search: string) => void;
}

const Search = (props : SearchProps) => {

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.target.value);
      };

    return (
        <div className="search-container">
            <h5>Search saved coffees:</h5>
            <input onChange={handleChange} className="search" placeholder="Enter coffee name..."/>
        </div>
    );
};

export default Search;