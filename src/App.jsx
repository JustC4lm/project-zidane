import { useState } from 'react'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Api from './components/Api'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Navbar />
    <Homepage />
    <Api />
    <Footer />
  </div>
}

export default App
