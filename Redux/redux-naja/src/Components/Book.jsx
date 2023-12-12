 import React, { Component, useContext } from 'react'
import { ThemeContext } from "../Context/ThemeContext";


 const Book  = ( ) =>   {

 
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
      <div className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            <li style={{ background : theme.ui }}>the way of kings</li>
            <li style={{ background : theme.ui }}>Read people like a book</li>
            <li style={{ background : theme.ui }}>the final empire</li>
        </ul>
      </div>
    )
  
}

export default Book