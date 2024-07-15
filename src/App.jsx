import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<a href="/home">here</a>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
