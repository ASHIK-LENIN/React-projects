import { Component, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import {AuthContext} from "../Context/AuthContext";


const Navigation = () => { 

  
              const { isLightTheme, light, dark } = useContext(ThemeContext);
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated , toggleAuth } = useContext(AuthContext);


              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={ toggleAuth }>
                    { isAuthenticated ? 'LoggedIn' : 'logged Out'}
                  </div>


                  <ul className="navbar">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
           


        


    
  
}

export default Navigation;