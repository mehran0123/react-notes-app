import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => {
          handleDarkMode((previosDarkMode) => !previosDarkMode);
        }}
        className="save"
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
