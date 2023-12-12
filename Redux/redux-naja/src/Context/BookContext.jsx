import React, { useState, createContext } from 'react'

export const BookContext = createContext;

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            title: 'Name of the wind',
            id: 1
        },
        {
            title: 'The way of kings',
            id: 2
        },
        {
            title: 'Power',
            id: 3
        },
        {
            title: 'Alchemist',
            id: 4
        },
    ])
    return (
        <>
            <BookContext.Provider value={{ books }}>
                {props.children}
            </BookContext.Provider>


        </>
    )
}

export default BookContextProvider;