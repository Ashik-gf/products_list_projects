import { ToastContainer } from "react-toastify"
import Home from "./pages/Home/Home"
import ProductsProvider from "./provider/ProductsProvider"


function App() {

  return (
    <div>
      <ProductsProvider>
        <ToastContainer />
        <Home />

      </ProductsProvider>
    </div>
  )
}

export default App
