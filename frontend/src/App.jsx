import {Routes,Route, Link} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Perform from './Pages/Perform.jsx'
export default function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perform" element={<Perform />} />
    </Routes>
    </>
    
  )
}