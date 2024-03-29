import { Route, Routes } from "react-router-dom"
import Index from './Pages/Index'
import Articles from './Pages/Articles'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import SingleArticles from './Pages/SingleArticles'
import Header from "./Components/Header"
import Footer from "./Components/Footer"


function App() {

 
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="products" element={<Products />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/articles/:articlesId" element={<SingleArticles />} />
        </Routes>


      <Footer />

    </>
  )
}

export default App
