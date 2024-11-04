import React, { useState } from 'react'
import useCategoryProducts from '../../Hooks/useSingleCatagory'
import ProductsActionsHeader from './ProductsActionsHeader'
import ProductsHeader from './ProductsHeader'
import ProductsList from './ProductsList'

const Products = () => {
    const [sortState, setSortState] = useState('asc')
    const [categorySelected, setCategorySelected] = useState('')
    const { fetchSingleCategory, categoryData } = useCategoryProducts()
    const handelSort = (value) => {
        setSortState(value)
    }
    const handelSelected = (value) => {
        fetchSingleCategory(value)
        setCategorySelected(value)

    }
    return (
        <div>
            <ProductsHeader />
            <ProductsActionsHeader
                onSort={handelSort}
                onSelected={handelSelected}
            />
            <ProductsList
                sortState={sortState}
                categoryData={categoryData}
                categorySelected={categorySelected} />
        </div>
    )
}

export default Products