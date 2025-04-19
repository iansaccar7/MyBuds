import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'

// Componentes
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

// Páginas
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ))
  }

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/catalog" 
            element={<CatalogPage addToCart={addToCart} />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cart={cart} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App