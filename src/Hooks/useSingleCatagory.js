import { useEffect, useState } from "react";

const useCategoryProducts = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const resetError = () => setError(null);
    useEffect(() => {
        if (!category) return;
        const fetchCategoryData = async () => {
            setLoading(true);
            resetError();
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                if (!response.ok) throw new Error(`Fetching ${category} Data Failed`);
                const data = await response.json();
                setCategoryData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryData();
    }, [category]);

    const fetchSingleCategory = (categoryName) => {
        setCategory(categoryName); // Set the category to trigger the fetch
        // setCategoryData([]); // Clear previous category data to avoid stale results
    };

    return {
        loading,
        error,
        category,
        categoryData,
        fetchSingleCategory
    };
};

export default useCategoryProducts;
