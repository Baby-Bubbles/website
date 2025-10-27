import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* Add more routes here */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App