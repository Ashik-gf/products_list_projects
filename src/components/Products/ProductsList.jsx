import React, { useContext } from 'react';
import { ProductsContext, SearchContext } from '../../contexts';
import Error from '../../utils/Error';
import Loading from '../../utils/Loading';
import NoDataFund from '../../utils/NoDataFund';
import Product from './Product';

const ProductsList = ({ sortState, categoryData, categorySelected }) => {
    const { products, loading, error } = useContext(ProductsContext);
    const { search, dispatchSearch } = useContext(SearchContext);

    let sortProducts
    const filterProducts = categoryData.slice().sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        return sortState === 'asc' ? priceA - priceB : priceB - priceA;
    })
    if (categoryData.length === 0 || categorySelected === null) {
        sortProducts = products.filter((pro) => pro.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            return sortState === 'asc' ? priceA - priceB : priceB - priceA;
        })
    } else {
        sortProducts = filterProducts
    }

    let content = null;
    if (loading) {
        content = <Loading />
    }
    if (!loading && error) {
        content = <Error error={error.message} />
    }
    if (!loading && !error && products.length > 0) {
        content = <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className={` ${sortState.length > 0 && "opacity-100 transition-opacity duration-1000"} opacity-90 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`} >
                    {
                        sortProducts?.map((product) => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    }
    return (
        <div className='p-4'>
            {
                sortProducts.length !== 0 ? <div>
                    {content}
                </div> : <NoDataFund />
            }

        </div>
    )
}

export default ProductsList