import {Routes,Route, Link} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Perform from './Pages/Perform.jsx'
import Authentication from './Pages/Authentication.jsx'
import SignIn from './Pages/SignIn.jsx'
export default function App(){
  return(
    <>
    <Routes>
      <Route index element={<SignIn/>}/>
      <Route path='/Authentication' element={<Authentication/>}/>
      <Route path="/Home" element={<Home />} />
      <Route path="/perform" element={<Perform />} />
    </Routes>
    </>
    
  )
}