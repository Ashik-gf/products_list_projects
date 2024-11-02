import React from 'react'
import useProducts from '../Hooks/useProducts'
import { ProductsContext } from '../contexts'

const ProductsProvider = ({ children }) => {
    const { products, loading, error } = useProducts()
    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider >
    )
}

export default ProductsProvider