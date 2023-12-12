import { Component } from "react";
import  Book  from "./Components/Book";
import Navigation from "./Components/Navigation";
import ThemeContextProvider from "./Context/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from './Context/AuthContext'
import BookContextProvider from "./Context/BookContext";

class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <AuthContextProvider>
          <Navigation />

          <BookContextProvider>
          <Book />
          </BookContextProvider>
          
          <ThemeToggle/>
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;