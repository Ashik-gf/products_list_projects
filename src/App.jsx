import { ToastContainer } from "react-toastify"
import Home from "./pages/Home/Home"
import { CartProvider } from "./provider/CartProvider"
import CategoriesProvider from "./provider/CategoriesProvider"
import ProductsProvider from "./provider/ProductsProvider"
import SearchProvider from "./provider/SearchProvider"


function App() {

  return (
    <div>
      <ProductsProvider>
        <CategoriesProvider>
          <SearchProvider>
            <CartProvider>
              <ToastContainer />
              <Home />
            </CartProvider>
          </SearchProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
