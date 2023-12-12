import React, { Component, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle =() =>  {

 
    const { toggleTheme } = useContext(ThemeContext);

    return (
      <div>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    );
  
}

export default ThemeToggle;