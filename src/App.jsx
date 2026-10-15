import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SceneBackground from './components/SceneBackground.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'

export default function App() {
  return (
    <div className="app">
      <SceneBackground />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  )
}
