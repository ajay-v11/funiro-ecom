import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Cart} from './pages/Cart';
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {Layout} from './pages/Layout';
import {Shop} from './pages/Shop';
import {Fav} from './pages/Fav';
import {Checkout} from './pages/Checkout';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {RecoilRoot} from 'recoil';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='/fav' element={<Fav />}></Route>
              <Route path='/product' element={<Product />}></Route>
              <Route path='/shop' element={<Shop />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
