import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/categories`);
                if (!response.ok) {
                    const errorMessage = `Fetching Categories Data Failed`;
                    throw new Error(errorMessage);
                }
                const data = await response.json();
                setCategories(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchCategories();
    }, []);

    return {
        categories,
        loading,
        error,
    };
};

export default useCategories;