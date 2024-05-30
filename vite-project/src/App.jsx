import { Route, Routes} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Contuct from "./components/Contuct";
import { createContext, useState } from "react";
export const UserContext = createContext();
function App() {
      const [data, setData]= useState({
        user:"Alamin",
        roll:"15"
      })
  return (
    <>
          <UserContext.Provider value={data}>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contuct/>}/>
          </Routes>
          </UserContext.Provider>
    </>
  )
}

export default App
