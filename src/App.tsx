import { Routes, Route, Link } from "react-router-dom";
import { SelectAvatar } from './pages/SelectAvatar'
import styled from 'styled-components'

const AppStyles = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  display: flex;
`

function App() {
  return (
    <AppStyles>
      <Routes>
        <Route path="/" element={<SelectAvatar />} />
      </Routes>
    </AppStyles>
  )
}

export default App
