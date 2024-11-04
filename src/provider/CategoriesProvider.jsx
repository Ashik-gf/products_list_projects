import React from 'react';
import useCategoryProducts from '../Hooks/useSingleCatagory';
import { CategoriesContext } from '../contexts';

const CategoriesProvider = ({ children }) => {
    const { loading, error, categoryData, fetchSingleCategory } = useCategoryProducts();
    return (
        <CategoriesContext.Provider value={{ loading, error, categoryData, fetchSingleCategory }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider