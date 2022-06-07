import './App.css';
import 'firebase/auth';
import { TopBanner} from './components/TopBanner/TopBanner';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Chefs } from './components/Chefs/Chefs';
import { Menu } from './components/Menu/Menu';
import { Visit } from './components/Visit/Visit';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { Register } from './components/Auth/Register/Register';
import { AuthContextProvider } from './context/AuthContext';
import { Account } from './components/Account/Account';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { ContainerTop } from './components/Containers/ContainerTop/ContainerTop';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { GlobalState } from './context/GlobalState';

function App() {
  


  return (
    <div className="App">
      <GlobalState>
        <AuthContextProvider>
        <ToastContainer />
        <ContainerTop />
          <Routes>
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<TopBanner />} />
              <Route path='/about' element={<About />} />
              <Route path='/menu/*' element={<Menu />} />
              <Route path='/chefs' element={<Chefs />} />
              <Route path='/table-booking' element={<Visit />} />
              <Route path='/shopping-cart' element={<ShoppingCart />} />
              <Route path='/account/*' element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } />
              <Route path='*' element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </GlobalState>
    </div>
  );
}

export default App;
