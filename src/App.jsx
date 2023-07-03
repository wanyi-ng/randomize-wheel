import AppRoutes from './AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'
 
export default function App() {

  return (
    <>
      <Navbar />
      <AppRoutes/>
      <Footer />
    </>
  )
}