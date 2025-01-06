import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import Footer from "./components/Footer"

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div className="bg-slate-200">
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default App
