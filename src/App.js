import './App.css';
import { TopBanner} from './components/TopBanner/TopBanner';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Chefs } from './components/Chefs/Chefs';
import { Menu } from './components/Menu/Menu';
import { Visit } from './components/Visit/Visit';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { Register } from './components/Auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<TopBanner />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu/*' element={<Menu />} />
        <Route path='/chefs' element={<Chefs />} />
        <Route path='/table-booking' element={<Visit />} />
      </Routes>
    </div>
  );
}

export default App;
