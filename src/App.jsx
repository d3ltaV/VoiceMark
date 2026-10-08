import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Mission from './pages/Mission.jsx'
import Product from './pages/Product.jsx'
import Blog from './pages/Blog.jsx'
import Stories from './pages/Stories.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </main>
    </div>
  )
}
