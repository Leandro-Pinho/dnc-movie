import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"

// pages
import Home from "./pages/Home/Home"
import MovieDetail from "./pages/MovieDetail/MovieDetails"
import { useState } from "react"

function App() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)} />
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App
