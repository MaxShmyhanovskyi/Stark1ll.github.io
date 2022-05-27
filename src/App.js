import './App.css';
import { TopBanner} from './components/TopBanner/TopBanner';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Chefs } from './components/Chefs/Chefs';
import { Menu } from './components/Menu/Menu';
import { Visit } from './components/Visit/Visit';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { Register } from './components/Auth/Register/Register';
import 'firebase/auth';
import { AuthContextProvider } from './context/AuthContext';
import { Account } from './components/Account/Account';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ToastContainer 
        
      />
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<TopBanner />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu/*' element={<Menu />} />
          <Route path='/chefs' element={<Chefs />} />
          <Route path='/table-booking' element={<Visit />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
