import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Cart} from "./pages/Cart"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Layout} from "./pages/Layout"
import {Shop} from "./pages/Shop"
import {Fav} from "./pages/Fav"
import {Checkout} from "./pages/Checkout"
import {Login} from "./pages/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/fav' element={<Fav />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
