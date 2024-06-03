import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentDate, onToggleTheme }) => {
  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="header">
      <h1>{weekday}</h1>
      <h2>{formattedDate}</h2>
      <button className="theme-toggle" onClick={onToggleTheme}>
        <FontAwesomeIcon icon={faSun} />
      </button>
    </div>
  );
};

export default Header;