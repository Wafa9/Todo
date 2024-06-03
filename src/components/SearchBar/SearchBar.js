import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"; 

const SearchBar = ({ listItems, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    console.log("Search:", searchTerm); 
    setSearchTerm(searchTerm);
    const filtered = listItems.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("result:", filtered); 
    onSearch(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input" 
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" /> 
    </div>
  );
};

export default SearchBar;