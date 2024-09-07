import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      {/* Displaying navbar & newsboard */}
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </div>
  )
}

export default App