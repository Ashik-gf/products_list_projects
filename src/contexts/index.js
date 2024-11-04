import { createContext } from "react";

const ProductsContext = createContext([]);
const CategoriesContext = createContext([]);
const SearchContext = createContext(null);
const CartContext = createContext([]);

export { ProductsContext, CategoriesContext, SearchContext, CartContext };
