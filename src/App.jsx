import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'


const App = () => {

  return (
    <>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/contacto" element={<Contacto />}/> 
        <Route path ="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
