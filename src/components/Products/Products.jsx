import React, { useState } from 'react'
import ProductsActionsHeader from './ProductsActionsHeader'
import ProductsHeader from './ProductsHeader'
import ProductsList from './ProductsList'

const Products = () => {
    const [sortState, setSortState] = useState('')
    const handelSort = (value) => {
        setSortState(value)
    }
    return (
        <div>
            <ProductsHeader />
            <ProductsActionsHeader onSort={handelSort} />
            <ProductsList sortState={sortState} />
        </div>
    )
}

export default Products