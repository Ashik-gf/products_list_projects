import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
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
              <ToastContainer
                position="top-center"
                autoClose={400}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              // transition= Bounce,
              />
              <Home />
            </CartProvider>
          </SearchProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
