

import { Route, Routes } from "react-router-dom"
import Landing from "./Components/Landing"
import Cart from "./Components/Cart"
import Help from "./Components/Help"
import Offers from "./Components/Offers"
import Search from "./Components/Search"
import SwiggyCorporate from "./Components/SwiggyCorporate"
import SignIn from "./Components/SignIn"
import Navbar from "./Components/Navbar"
import Restautants from "./Components/Reasturant"
import Instamart from "./Components/OtherCompany/Instamart"
import Dineout from "./Components/OtherCompany/Dineout"
import Genie from "./Components/OtherCompany/Genie"
import Menu from "./Components/Menu"
import CraouselRest from "./Components/CraouselRest"




const App = () => {
  return (
    <div className=''>

<Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='/Offers' element={<Offers/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/SwiggyCorporate' element={<SwiggyCorporate/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Nabar' element={<Navbar/>}/>
          <Route path="/Restautants" element={<Restautants/>}/>
          <Route path="/Instamart" element={<Instamart/>}/>
          <Route path="/Dineout" element={<Dineout/>}/>
          <Route path="/Genie" element={<Genie/>}/>
          <Route path="/menu/:id" element={<Menu/>}></Route>
          <Route path="/craouselRestourent/:id" element={<CraouselRest/>}></Route>



        </Routes>

    
    </div>
  )
}

export default App