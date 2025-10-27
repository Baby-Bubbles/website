import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
