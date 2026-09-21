import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Demo from './pages/Demo'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
