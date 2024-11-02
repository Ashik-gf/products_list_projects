import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [sortData, setSortData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products`);
                if (!response.ok) {
                    const errorMessage = `Fetching Products Data Failed`;
                    throw new Error(errorMessage);
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,

    };
};

export default useProducts;