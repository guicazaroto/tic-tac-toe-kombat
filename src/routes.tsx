import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { SelectAvatar } from './pages/SelectAvatar'
import { GamePlay } from './pages/GamePlay'

export default function Routes () {
  return (
    <BrowserRoutes>
      <Route path="/" element={<SelectAvatar />} />
      <Route path="/play" element={<GamePlay />} />
    </BrowserRoutes>
  )
}