import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const resetError = () => setError(null);

    // Fetch all products initially
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            resetError();
            try {
                const response = await fetch(`https://fakestoreapi.com/products`);
                if (!response.ok) throw new Error("Fetching Products Data Failed");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
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
