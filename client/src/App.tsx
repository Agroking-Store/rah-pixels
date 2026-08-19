import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Social from './pages/Social'
import Blog from './pages/Blog'
import SmoothScroll from './components/common/SmoothScroll'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#F5F5F7] selection:bg-[#F7B71D] selection:text-[#34164F]">
          <Navbar />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/social" element={<Social />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
