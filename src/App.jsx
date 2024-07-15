import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

function App() {
  // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<a href="/home">here</a>}/> */}
    //     <Route path="/" element={<Home/>}/>
    //   </Routes>
    // </BrowserRouter>
  return(
    <Home />
  )
}

export default App
