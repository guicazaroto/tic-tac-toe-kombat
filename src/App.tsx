import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import { SelectAvatar } from './pages/SelectAvatar'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectAvatar />} />
      </Routes>
    </div>
  )
}

export default App
