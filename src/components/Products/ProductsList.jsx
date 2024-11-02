import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts';
import Loading from '../../utils/Loading';
import Product from './Product';

const ProductsList = ({ sortState }) => {
    const { products, loading, error, setLoading, setError, setProducts } = useContext(ProductsContext);
    let sortProducts
    if (sortState === "desc") {
        sortProducts = products.sort((a, b) => b.price - a.price);
    } if (sortState === "asc") {
        sortProducts = products.sort((a, b) => a.price - b.price);
    } else {
        sortProducts = products
    }

    console.log(sortProducts);
    let content = null;
    if (loading) {
        content = <Loading />
    }
    if (!loading && error) {
        content = <Error error={error} />
    }
    if (!loading && !error && products.length > 0) {
        content = <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className={` ${sortState.length > 0 && "opacity-100 transition-opacity duration-1000"} opacity-90 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`} >
                    {
                        sortProducts.map((product) => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default ProductsList