import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'

import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import FAQ from './Pages/FAQ/FAQ'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/faq' element={<FAQ />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
