import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About us</Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
      </Routes>
    </>
  );
}

export default App;
