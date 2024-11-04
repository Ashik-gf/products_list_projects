import React, { useReducer } from 'react';
import { SearchContext } from '../contexts';
import searchReducer from '../reducers/searchReducer';
const searchState = '';
const SearchProvider = ({ children }) => {
    const [search, dispatchSearch] = useReducer(searchReducer, searchState)
    return (
        <SearchContext.Provider value={{ search, dispatchSearch }} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider