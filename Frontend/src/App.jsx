import ChatInterface from './pages/ChatInterface'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatInterface />} />
    </Routes>
  )
}

export default App
