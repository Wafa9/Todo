import React, { useState } from "react";
import "./input.css";

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      onSubmit(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={value}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default Input;